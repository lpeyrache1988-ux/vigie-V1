const fs = require('fs');
const vm = require('vm');

function loadIntoContext(file, ctx){
  const code = fs.readFileSync(file,'utf8');
  vm.runInContext(code, ctx, {filename:file});
}

const ctx = { window:{}, console, localStorage: { _s:{}, getItem(k){return this._s[k]||null;}, setItem(k,v){this._s[k]=String(v);}}, alert: ()=>{} };
vm.createContext(ctx);

loadIntoContext('/mnt/data/v40/data/flows_v30.js', ctx);
loadIntoContext('/mnt/data/v40/data/letters_v1.js', ctx);
loadIntoContext('/mnt/data/v40/data/engine_v30.js', ctx);

const V30 = ctx.window.V30;

function suggestLetterKeys(flow, result){
  const L = ctx.window.VIGIE_LETTERS || {};
  const keys = [];
  const fid = (flow && flow.id) || "";
  const pack = (result && result.pack_id) || "";
  if(pack==="tax_rectif" || /tax|impot|rectif|l64|controle/.test(fid)){
    if(L.impots_delai) keys.push('impots_delai');
    if(L.impots_reclamation) keys.push('impots_reclamation');
    if(L.generic_contestation) keys.push('generic_contestation');
    return keys;
  }
  if(/banque|bank|arnaque|fraude/.test(fid) || /banque/.test(pack)){
    if(L.banque_contestation) keys.push('banque_contestation');
    if(L.banque_mediateur) keys.push('banque_mediateur');
    if(L.generic_reclamation) keys.push('generic_reclamation');
    return keys;
  }
  if(/caf/.test(fid) || /caf/.test(pack)){
    if(L.caf_reexamen) keys.push('caf_reexamen');
    if(L.generic_reclamation) keys.push('generic_reclamation');
    return keys;
  }
  if(/ameli|cpam/.test(fid) || /ameli/.test(pack)){
    if(L.ameli_droits) keys.push('ameli_droits');
    if(L.generic_reclamation) keys.push('generic_reclamation');
    return keys;
  }
  if(/france_travail|pole emploi/.test(fid) || /france_travail/.test(pack)){
    if(L.france_travail_reclamation) keys.push('france_travail_reclamation');
    if(L.generic_reclamation) keys.push('generic_reclamation');
    return keys;
  }
  if(/logement/.test(fid) || /logement/.test(pack)){
    if(L.logement_depot_garantie) keys.push('logement_depot_garantie');
    if(L.generic_reclamation) keys.push('generic_reclamation');
    return keys;
  }
  if(/deces|succession/.test(fid) || /deces/.test(pack)){
    if(L.deces_informer_organisme) keys.push('deces_informer_organisme');
    if(L.generic_info) keys.push('generic_info');
    return keys;
  }
  if(L.generic_info) keys.push('generic_info');
  return keys;
}

const cases = [
  {name:'Passeport adulte', query:'passeport adulte', expectFlow:'passport', inputs:{ trip_urgent:'no'}},
  {name:'Passeport mineur', query:'passeport mineur', expectFlow:'passport', inputs:{ trip_urgent:'no', is_minor:'yes'}},
  {name:'CNI renouvellement', query:"carte d'identité renouvellement", expectFlow:'cni', inputs:{ trip_urgent:'no'}},
  {name:'Mariage dossier', query:'dossier mariage', expectFlow:'mariage', inputs:{}},
  {name:'Rectification impôts (courrier reçu)', query:'courrier proposition de rectification impôts L64', expectFlow:'tax_rectif', inputs:{ date_received:'2026-02-01', urgency:'yes'}},
  {name:'Déclaration impôts corriger', query:'corriger déclaration impôts en ligne', expectFlow:'tax_declaration', inputs:{}},
  {name:'Réclamation impôts avis', query:'contester avis imposition impôts', expectFlow:'tax_rectif', inputs:{ date_received:'2026-01-15'}},
  {name:'CAF trop-perçu', query:'CAF justificatifs trop-perçu', expectFlow:'caf', inputs:{ caf_reason:'trop_percu'}},
  {name:'AMELI remboursement', query:'ameli attestation remboursement', expectFlow:'ameli', inputs:{ ameli_topic:'remboursement'}},
  {name:'France Travail actualisation', query:'france travail actualisation droits', expectFlow:'france_travail', inputs:{ ft_topic:'actualisation'}},
  {name:'Fraude bancaire carte piratée', query:'fraude bancaire carte piratée', expectFlow:'banque', inputs:{ banque_topic:'fraude'}},
  {name:'Frais bancaires', query:'frais bancaires découvert', expectFlow:'banque', inputs:{ banque_topic:'frais'}},
  {name:'Surendettement BDF', query:'surendettement banque de France', expectFlow:'banque', inputs:{ banque_topic:'surendettement'}},
  {name:'Logement dépôt de garantie', query:'litige logement dépôt de garantie', expectFlow:'logement', inputs:{ logement_topic:'litige'}},
  {name:'Expulsion loyers impayés', query:'expulsion loyers impayés', expectFlow:'logement', inputs:{ logement_topic:'impayes'}},
  {name:'Arnaque phishing', query:'arnaque phishing sms', expectFlow:'arnaques', inputs:{ mode:'signaler'}},
  {name:'Usurpation identité', query:'usurpation identité compte piraté', expectFlow:'arnaques', inputs:{ mode:'identite'}},
  {name:'Recours administratif contestation', query:'recours administratif contestation', expectFlow:'justice', inputs:{ mode:'recours_admin'}},
  {name:'Médiation litige', query:'médiation conciliateur litige', expectFlow:'justice', inputs:{ mode:'amiable'}},
  {name:'Décès démarches', query:'démarches après décès', expectFlow:'vie_civile', inputs:{}},
  {name:"Acte d'état civil", query:"acte de naissance état civil", expectFlow:'vie_civile', inputs:{}},
  {name:'Naissance déclarer', query:'naissance déclarer démarches', expectFlow:'vie_civile', inputs:{}},
  {name:'Permis renouvellement', query:'permis de conduire renouvellement', expectFlow:'generic', inputs:{}},
  {name:'Retraite carrière', query:'dossier retraite carrière', expectFlow:'generic', inputs:{}},
  {name:'Aide juridictionnelle', query:'aide juridictionnelle', expectFlow:'justice', inputs:{ mode:'recours_admin'}},
];

function run(){
  let pass=0, fail=0;
  const failures=[];
  for(const c of cases){
    const flow = V30.matchFlow(c.query);
    const okFlow = flow && flow.id === c.expectFlow;
    const result = V30.evalFlow(flow, c.inputs||{});
    const letters = suggestLetterKeys(flow, result);
    const okLetters = Array.isArray(letters) && letters.length>0;

    // extra assertions
    let extraOk = true;
    let extraMsg = '';
    if(c.name.includes('Rectification impôts')){
      extraOk = !!result.deadline_label && result.legal_delay_days===30;
      if(!extraOk) extraMsg = `deadline/30j attendu, got delay=${result.legal_delay_days}, deadline_label=${result.deadline_label}`;
    }
    if(c.name.includes('Fraude bancaire')){
      extraOk = (result.strategy_key==='fraude');
      if(!extraOk) extraMsg = `strategy fraude attendue, got ${result.strategy_key}`;
    }
    if(c.name.includes('Expulsion')){
      extraOk = (result.strategy_key==='impayes');
      if(!extraOk) extraMsg = `strategy impayes attendue, got ${result.strategy_key}`;
    }

    const ok = okFlow && okLetters && extraOk;
    if(ok) pass++; else { fail++; failures.push({case:c.name, expectFlow:c.expectFlow, gotFlow:flow?flow.id:null, lettersCount:letters.length, extraMsg}); }
  }
  return {pass, fail, failures};
}

const out = run();
console.log(JSON.stringify(out,null,2));
