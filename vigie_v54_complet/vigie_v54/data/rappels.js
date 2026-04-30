// VIGIE V52 — Moteur de rappels et calendrier de deadlines
// Stockage local uniquement — aucun serveur
window.VIGIE_RAPPELS = (function(){
  'use strict';

  const STORAGE_KEY = 'vigie_rappels_v52';

  function load(){ try{ return JSON.parse(localStorage.getItem(STORAGE_KEY)||'[]'); }catch(e){ return []; } }
  function save(list){ try{ localStorage.setItem(STORAGE_KEY, JSON.stringify(list)); }catch(e){} }

  function uid(){ return 'r_' + Date.now().toString(36) + Math.random().toString(36).slice(2,6); }
  function nowISO(){ return new Date().toISOString(); }
  function fmtDate(iso){
    if(!iso) return '';
    const d = new Date(iso);
    if(isNaN(d)) return iso;
    return d.toLocaleDateString('fr-FR',{day:'2-digit',month:'long',year:'numeric'});
  }
  function daysUntil(iso){
    if(!iso) return null;
    const d = new Date(iso);
    if(isNaN(d)) return null;
    return Math.ceil((d - new Date()) / 86400000);
  }

  // ── CRUD ──────────────────────────────────────────────────────────
  function getAll(){ return load(); }

  function add({ titre, date_echeance, organisme, description, pillar, dossier_id, source_moment, obligatoire }){
    const list = load();
    const r = {
      id: uid(),
      titre: titre || 'Rappel sans titre',
      date_echeance: date_echeance || null,
      organisme: organisme || '',
      description: description || '',
      pillar: pillar || 'autres',
      dossier_id: dossier_id || null,
      source_moment: source_moment || null,
      obligatoire: !!obligatoire,
      done: false,
      created_at: nowISO(),
    };
    list.push(r);
    save(list);
    return r;
  }

  function toggle(id){
    const list = load();
    const r = list.find(x => x.id === id);
    if(r){ r.done = !r.done; r.updated_at = nowISO(); }
    save(list);
    return r;
  }

  function remove(id){
    const list = load().filter(x => x.id !== id);
    save(list);
  }

  function update(id, fields){
    const list = load();
    const r = list.find(x => x.id === id);
    if(r){ Object.assign(r, fields); r.updated_at = nowISO(); }
    save(list);
    return r;
  }

  // ── Importer depuis un moment de vie ─────────────────────────────
  function importerMoment(momentId, dateReference){
    const moments = window.VIGIE_MOMENTS || [];
    const moment = moments.find(m => m.id === momentId);
    if(!moment) return [];

    const dateRef = dateReference ? new Date(dateReference) : new Date();
    const added = [];

    for(const step of moment.steps){
      if(!step.delay) continue;

      // Parser le délai pour calculer la date d'échéance
      let echeance = null;
      const delay = step.delay.toLowerCase();
      const jMatch = delay.match(/j[+-]?(\d+)/);
      if(jMatch){
        const offset = parseInt(jMatch[1]);
        const isAfter = delay.includes('+') || !delay.includes('-');
        const d = new Date(dateRef);
        d.setDate(d.getDate() + (isAfter ? offset : -offset));
        echeance = d.toISOString().split('T')[0];
      } else if(delay.includes('mois')) {
        const mMatch = delay.match(/(\d+)\s*mois/);
        if(mMatch){
          const d = new Date(dateRef);
          d.setMonth(d.getMonth() + parseInt(mMatch[1]));
          echeance = d.toISOString().split('T')[0];
        }
      }

      const r = add({
        titre: step.label,
        date_echeance: echeance,
        organisme: step.organisme || '',
        description: step.delay,
        pillar: moment.id,
        source_moment: momentId,
        obligatoire: step.obligatoire || false,
      });
      added.push(r);
    }
    return added;
  }

  // ── Calcul des alertes ────────────────────────────────────────────
  function getAlertes(){
    const list = load().filter(r => !r.done && r.date_echeance);
    const now = new Date();
    return list.map(r => {
      const days = daysUntil(r.date_echeance);
      let niveau = 'info';
      if(days < 0)       niveau = 'retard';
      else if(days <= 3)  niveau = 'critique';
      else if(days <= 7)  niveau = 'urgent';
      else if(days <= 30) niveau = 'attention';
      return { ...r, days_left: days, niveau };
    }).sort((a, b) => (a.days_left ?? 999) - (b.days_left ?? 999));
  }

  function getNbAlertes(){
    return getAlertes().filter(r => ['retard','critique','urgent'].includes(r.niveau)).length;
  }

  // ── Rappels récurrents annuels (calendrier fiscal/social) ─────────
  const RAPPELS_SYSTEME = [
    { id:'sys_declaration_revenus', titre:'Déclaration de revenus', mois:4, jour:1, organisme:'Impôts', description:'Déclarer ses revenus de l\'année précédente (délai variable selon département)', pillar:'impots', obligatoire:true },
    { id:'sys_maj_ressources_caf', titre:'Mise à jour ressources CAF', mois:9, jour:1, organisme:'CAF', description:'Mettre à jour vos ressources annuelles à la CAF', pillar:'caf', obligatoire:true },
    { id:'sys_taxe_fonciere', titre:'Paiement taxe foncière', mois:10, jour:15, organisme:'Impôts', description:'Paiement de la taxe foncière (date indicative — vérifier l\'avis)', pillar:'impots', obligatoire:false },
    { id:'sys_actualisation_ft', titre:'Actualisation mensuelle France Travail', mois:null, jour:null, organisme:'France Travail', description:'S\'actualiser entre le 28 et le 15 du mois suivant si allocataire ARE', pillar:'travail', obligatoire:true },
  ];

  function getRappelsSysteme(){
    const year = new Date().getFullYear();
    return RAPPELS_SYSTEME.filter(r => r.mois !== null).map(r => {
      const d = new Date(year, r.mois - 1, r.jour);
      if(d < new Date()) d.setFullYear(year + 1);
      return { ...r, date_echeance: d.toISOString().split('T')[0], days_left: daysUntil(d.toISOString()) };
    });
  }

  return {
    getAll, add, toggle, remove, update,
    importerMoment,
    getAlertes, getNbAlertes,
    getRappelsSysteme,
    fmtDate, daysUntil,
  };
})();
