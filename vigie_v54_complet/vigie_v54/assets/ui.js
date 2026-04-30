// Vigie V50 — UI helpers
function esc(s){ return String(s??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c])); }
function fmtDate(d){ if(!d) return ""; const dt=new Date(d); if(isNaN(dt)) return d; return dt.toLocaleDateString('fr-FR',{day:'2-digit',month:'long',year:'numeric'}); }
function relDate(d){ const dt=new Date(d); const now=new Date(); const diff=Math.round((dt-now)/(86400000)); if(diff<0) return `il y a ${Math.abs(diff)}j`; if(diff===0) return "aujourd'hui"; if(diff===1) return "demain"; return `dans ${diff}j`; }

// Shared header renderer
function renderHeader(activePage){
  const nav=[
    {href:'index.html',icon:'🏠',label:'Accueil',id:'index'},
    {href:'parcours.html?guide=1',icon:'🧩',label:'Guidage',id:'parcours'},
    {href:'dashboard.html',icon:'📁',label:'Mes dossiers',id:'dashboard'},
    {href:'map.html',icon:'🗺️',label:'Carte',id:'map'},
    {href:'recours_nationaux.html',icon:'⚖️',label:'Recours',id:'recours'},
  ];
  return `
  <header class="site-header">
    <div class="container">
      <div class="inner">
        <a href="index.html" class="brand">
          <div class="brand-logo">V</div>
          <div>
            <div class="brand-name">Vigie</div>
            <div class="brand-tagline">Copilote citoyen</div>
          </div>
        </a>
        <nav class="header-nav">
          ${nav.map(n=>`<a class="nav-link${activePage===n.id?' active':''}" href="${n.href}">${n.icon} <span>${n.label}</span></a>`).join('')}
        </nav>
      </div>
    </div>
  </header>`;
}

function renderFooter(){
  return `
  <div class="footerNote">
    ℹ️ Vigie est un outil d'information générale — <strong>pas un conseil juridique personnalisé</strong>. 
    Vérifiez toujours les délais sur votre courrier. Données stockées localement sur votre appareil.
    <span style="margin:0 8px">·</span><a href="mentions.html">Mentions légales</a>
  </div>`;
}

// Pilier → icône
const PILLAR_ICONS = {impots:'💰',caf:'👶',banque:'🏦',logement:'🏠',travail:'💼',sante:'🩺',arnaques:'⚠️',justice:'⚖️',institutions:'🪪',retraite:'👴',consommation:'🛒',vie_civile:'🪪',autres:'📌'};
function pillarIcon(p){ return PILLAR_ICONS[p]||'📋'; }

window.VIGIE_UI = { esc, fmtDate, relDate, renderHeader, renderFooter, pillarIcon };
