let __bounds;

/**
 * Carte citoyenne "type Google Maps" (simple & robuste)
 * Données administrations via etablissements-publics.api.gouv.fr (annuaire service-public).
 *
 * NB: Cette page fonctionne en file://, mais nécessite internet pour:
 * - tuiles OpenStreetMap
 * - appels API
 * - Leaflet CDN
 */
(function(){
  const TYPES = [
    { id:"mairie", label:"🏛️ Mairie", default:true },
    { id:"caf", label:"👶 CAF", default:true },
    { id:"cpam", label:"🩺 CPAM (Ameli)", default:true },
    { id:"france_travail", label:"💼 France Travail", api:"pole_emploi", default:false },
    { id:"sip", label:"💰 Impôts (SIP)", api:"sip", default:true },
    { id:"defenseur_droits", label:"⚖️ Défenseur des droits", default:false },
    { id:"ta", label:"🏛️ Tribunal administratif", api:"ta", default:false },
    { id:"adil", label:"🏠 ADIL (logement)", api:"adil", default:false },
    { id:"permanence_juridique", label:"🧾 Permanence juridique", api:"permanence_juridique", default:false },
    { id:"bav", label:"🤝 Aide aux victimes (BAV)", api:"bav", default:false },
    { id:"greffe_associations", label:"🧩 Greffe des associations", api:"prefecture_greffe_associations", default:false },
  ];

  // API host documented by beta.gouv "Annuaire des établissements publics"
  // https://etablissements-publics.api.gouv.fr/v1/organismes/{departement}/{type}
  const API_HOST = "https://etablissements-publics.api.gouv.fr/v1/organismes";

  let map, layer, markers = [];
  let userMarker = null;

  function qs(id){ return document.getElementById(id); }
  function setStatus(t){ const el=qs("status"); if(el) el.textContent = t || ""; }
  function setCount(t){ const el=qs("count"); if(el) el.textContent = t || ""; }

  
  function showLoading(){ setStatus("⏳ Chargement…"); }
  function showEmpty(){ setStatus("⚠️ Aucun résultat. Essaie un autre code postal ou d’autres filtres."); }
  function showError(){ setStatus("❌ Service indisponible (vérifie ta connexion)."); }

  function setOnlyType(typeId){
    for(const cb of document.querySelectorAll('#filters input[type="checkbox"]')){
      cb.checked = (cb.getAttribute("data-type") === typeId);
    }
  }

  function setTypes(typeIds){
    const set = new Set(typeIds||[]);
    for(const cb of document.querySelectorAll('#filters input[type="checkbox"]')){
      cb.checked = set.has(cb.getAttribute("data-type"));
    }
  }

  function need(needId){
    // Filtrage orienté "besoin" (plus proche des attentes citoyennes)
    const M = {
      papiers: ["mairie"],
      impots: ["sip"],
      sante: ["cpam"],
      emploi: ["france_travail"],
      logement: ["adil"],
      justice: ["ta", "defenseur_droits", "permanence_juridique", "bav"],
      associations: ["greffe_associations"],
    };
    if(!needId) return;
    const types = M[needId];
    if(types && types.length) setTypes(types);
  }

  function quick(typeId){
    // preset citizen-friendly quick access
    if(typeId) setOnlyType(typeId);
    run();
  }
function depFromCP(cp){
    cp = String(cp||"").trim();
    if(!cp) return null;
    // DOM: 97x / 98x / 2A 2B complexity not solvable from CP alone perfectly.
    // We'll take first 2 digits; if 97/98 take first 3.
    if(cp.startsWith("97") || cp.startsWith("98")) return cp.slice(0,3);
    return cp.slice(0,2);
  }

  function typeToApi(t){
    // mapping id->api code
    const found = TYPES.find(x=>x.id===t);
    if(!found) return t;
    if(found.api) return found.api;
    return found.id;
  }

  function makeFilters(){
    const host = qs("filters");
    host.innerHTML = TYPES.map(t=>{
      const checked = t.default ? "checked" : "";
      return `<label class="pill"><input type="checkbox" data-type="${t.id}" ${checked}> ${t.label}</label>`;
    }).join("");
  }

  function selectedTypes(){
    return Array.from(document.querySelectorAll('#filters input[type="checkbox"]'))
      .filter(i=>i.checked)
      .map(i=>i.getAttribute("data-type"));
  }

  function openInNew(url){
    const a = document.createElement("a");
    a.href = url; a.target="_blank"; a.rel="noopener";
    a.click();
  }

  function sanitizePhone(p){
    return String(p||'').replace(/[^0-9+]/g,'');
  }


  function clearMarkers(){
    markers.forEach(m=>layer.removeLayer(m));
    markers = [];
    layer.clearLayers();
  }

  function normalizeRecord(r, typeLabel){
    // the API returns heterogeneous records (GeoJSON, annuaire import, etc.)
    // We accept both "flat" keys and nested keys (Nom/Adresse/CoordonnéesNum...).
    const name = r.nom || r.name || r.intitule || r.libelle || r.Nom || "Service public";

    // Address (prefer nested structure)
    const addrObj = r.Adresse || r.adresse || null;
    const address = r.adresse || r.adresse_postale || r.adresse_ligne || r.adresse_complete
      || (addrObj && (addrObj.Ligne || addrObj.Ligne1 || addrObj.Ligne2))
      || "";
    const cp = r.code_postal || r.codepostal || r.cp || (addrObj && (addrObj.CodePostal || addrObj.Code_postal)) || "";
    const city = r.commune || r.ville || r.localite || (addrObj && (addrObj.NomCommune || addrObj.Commune)) || "";

    // Contact
    const coord = r.CoordonnéesNum || r.coordonnees_num || {};
    const phone = r.telephone || r.tel || r.telephone1 || coord.Téléphone || coord.Telephone || "";
    const url = r.url || r.site_internet || r.web || coord.Url || coord.URL || coord.Site || "";

    const hours = r.horaires || r.plage_ouverture || r.Ouverture || "";

    // Coordinates
    const loc = (addrObj && addrObj.Localisation) ? addrObj.Localisation : null;
    const lat = r.latitude || (r.coordonnees && r.coordonnees[0]) || (r.geo_point_2d && r.geo_point_2d.lat) || (loc && (loc.Latitude || loc.lat));
    const lon = r.longitude || (r.coordonnees && r.coordonnees[1]) || (r.geo_point_2d && r.geo_point_2d.lon) || (loc && (loc.Longitude || loc.lon));

    return { typeLabel, name, address, cp, city, phone, url, hours, lat, lon, raw:r };
  }

  function recordLatLng(rec){
    const lat = Number(rec.lat);
    const lon = Number(rec.lon);
    if(!isFinite(lat) || !isFinite(lon)) return null;
    return [lat, lon];
  }

  function addResultToMap(rec){
    const ll = recordLatLng(rec);
    if(!ll) return;
    const m = L.marker(ll);
    const lines = [
      `<b>${esc(rec.name)}</b> <span class="tag" style="margin-left:6px">${esc(rec.typeLabel)}</span>`,
      rec.address ? esc(rec.address) : "",
      (rec.cp || rec.city) ? `<span class="small">${esc((rec.cp||"") + " " + (rec.city||""))}</span>` : "",
      rec.phone ? `<span class="small">📞 ${esc(rec.phone)}</span>` : "",
      rec.phone ? `<a class="btn" href="tel:${sanitizePhone(rec.phone)}">📞 Appeler</a>` : "",
      rec.url ? `<a class="btn" href="${esc(rec.url)}" target="_blank" rel="noopener">🌐 Site</a>` : "",
      `<span class="small">📍 ${ll[0].toFixed(5)}, ${ll[1].toFixed(5)}</span>`,
      `<a class="btn" href="https://www.google.com/maps/dir/?api=1&destination=${ll[0]},${ll[1]}" target="_blank" rel="noopener">🧭 Itinéraire</a>`
    ].filter(Boolean).join("<br>");
    m.bindPopup(lines);
    m.addTo(layer);
    markers.push(m);
  }

  function renderList(recs){
    const host = qs("list");
    if(!recs.length){
      host.innerHTML = `<div class="small">Aucun résultat. Essaie un autre code postal, ou coche d'autres services.</div>`;
      return;
    }
    host.innerHTML = recs.map((r, idx)=>{
      const ll = recordLatLng(r);
      const mapsUrl = ll ? `https://www.google.com/maps/dir/?api=1&destination=${ll[0]},${ll[1]}` : "";
      const coordTag = ll ? `<span class="tag">📍 ${ll[0].toFixed(5)}, ${ll[1].toFixed(5)}</span>` : ``;
      return `
        <div class="item">
          <div style="min-width:0">
            <strong>${esc(r.name)} <span class="tag" style="margin-left:6px">${esc(r.typeLabel)}</span></strong>
            <div class="small">${esc([r.address, (r.cp||"") + " " + (r.city||"")].filter(Boolean).join(" • "))}</div>
            <div class="tags" style="margin-top:6px">
              ${r.phone ? `<span class="tag">📞 ${esc(r.phone)}</span>` : ``}
              ${r.hours ? `<span class="tag">🕒 horaires</span>` : ``}
              ${coordTag}
            </div>
          </div>
          <div class="row" style="justify-content:flex-end">
            ${r.phone ? `<a class="btn" href="tel:${sanitizePhone(r.phone)}">📞</a>` : ``}
            ${r.url ? `<a class="btn" href="${esc(r.url)}" target="_blank" rel="noopener">🌐</a>` : ``}
            ${mapsUrl ? `<a class="btn" href="${esc(mapsUrl)}" target="_blank" rel="noopener">🧭</a>` : ``}
          </div>
        </div>
      `;
    }).join("");
  }

  async function fetchType(dep, type, limit){
    const apiType = typeToApi(type);
    const url = `${API_HOST}/${encodeURIComponent(dep)}/${encodeURIComponent(apiType)}`;
    // The API may return GeoJSON FeatureCollection
    const res = await fetch(url, { headers: { "Accept": "application/json" }});
    if(!res.ok) throw new Error(`Erreur API ${res.status}`);
    const data = await res.json();
    let arr = [];
    if(Array.isArray(data)) arr = data;
    else if(data && data.type === 'FeatureCollection' && Array.isArray(data.features)) arr = data.features;
    else if(data && Array.isArray(data.features)) arr = data.features;
    // cap results + normalisation GeoJSON Feature → record
    return arr.slice(0, limit).map(f=>({
      ...(f && f.properties ? f.properties : f),
      latitude:  (f && f.geometry && f.geometry.coordinates) ? f.geometry.coordinates[1] : (f ? f.latitude : undefined),
      longitude: (f && f.geometry && f.geometry.coordinates) ? f.geometry.coordinates[0] : (f ? f.longitude : undefined),
    }));
  }

  function bestCenter(recs){
    // center on first record or user marker
    const ll = recs.map(recordLatLng).filter(Boolean)[0];
    if(ll) return ll;
    return [46.6, 2.4];
  }

  async function run(){
    const cp = (qs("cp").value || "").trim();
    const dep = depFromCP(cp);
    const types = selectedTypes();
    const limit = parseInt(qs("limit").value || "30", 10);

    if(!dep){
      setStatus("⚠️ Renseigne un code postal.");
      return;
    }
    if(!types.length){
      setStatus("⚠️ Coche au moins un service.");
      return;
    }

    showLoading();
    clearMarkers();
    setCount("");

    let all = [];
    let errors = 0;
    for(const t of types){
      try{
        const rows = await fetchType(dep, t, limit);
        const typeLabel = (TYPES.find(x=>x.id===t)?.label || t).replace(/^[^ ]+\s/, ""); // keep emoji label
        const norm = rows.map(r=>normalizeRecord(r, typeLabel));
        all = all.concat(norm);
      }catch(e){
        console.warn(e);
        errors++;
      }
    }

    // basic dedupe by name+cp+address
    const seen = new Set();
    all = all.filter(r=>{
      const k = (r.name+"|"+r.cp+"|"+r.address).toLowerCase();
      if(seen.has(k)) return false;
      seen.add(k); return true;
    });

    // show
    all.forEach(addResultToMap);
    renderList(all);

    setCount(`${all.length} résultat(s) • Département ${dep}`);

    const mode = qs("mode").value;
    if(mode === "city" && all.length){
      const group = L.featureGroup(markers);
      map.fitBounds(group.getBounds().pad(0.12));
    }else{
      map.setView(bestCenter(all), all.length ? 10 : 6);
    }

    if(!all.length){
      if(errors >= types.length) showError();
      else showEmpty();
    }else{
      setStatus("✅ Terminé");
    }
  }

  function init(){
    makeFilters();
    map = L.map('map', { zoomControl:true }).setView([46.6, 2.4], 6);
    layer = L.layerGroup().addTo(map);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; OpenStreetMap'
    }).addTo(map);

    // params auto
    const p = new URL(location.href).searchParams;
    const type = p.get("type");
    const cp = p.get("cp");
    if(cp) qs("cp").value = cp;

    const types = (p.get("types") || "").split(",").map(s=>s.trim()).filter(Boolean);
    if(type){
      setOnlyType(type);
    } else if(types.length){
      for(const cb of document.querySelectorAll('#filters input[type="checkbox"]')){
        cb.checked = types.includes(cb.getAttribute("data-type"));
      }
    }

    if(cp) run();
  }

  function useGeoloc(){
    if(!navigator.geolocation){
      setStatus("Géolocalisation non disponible.");
      return;
    }
    setStatus("Localisation…");
    navigator.geolocation.getCurrentPosition(pos=>{
      const {latitude, longitude} = pos.coords;
      if(userMarker) map.removeLayer(userMarker);
      userMarker = L.circleMarker([latitude, longitude], { radius:8, color:'#2b6cff', fillColor:'#2b6cff', fillOpacity:0.35, weight:2 }).addTo(map).bindPopup("Vous êtes ici");
      const acc = pos.coords.accuracy;
      if(acc && acc < 5000){
        if(window.__accCircle) map.removeLayer(window.__accCircle);
        window.__accCircle = L.circle([latitude, longitude], { radius: Math.min(acc, 1200), color:'#2b6cff', fillColor:'#2b6cff', fillOpacity:0.10, weight:1 }).addTo(map);
      }
      map.setView([latitude, longitude], 12);
      setStatus("✅ Localisé. Tu peux ensuite rechercher par code postal.");
    }, err=>{
      setStatus("Impossible de vous localiser.");
    }, { enableHighAccuracy:false, timeout:8000, maximumAge:60000 });
  }

  window.MapVigie = { init, run, useGeoloc, quick, need };
})();
