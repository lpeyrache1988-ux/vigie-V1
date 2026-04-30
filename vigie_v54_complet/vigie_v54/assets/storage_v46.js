(function(){
  const KEY_VERSION = 'vigie_schema_version';
  const CURRENT = 1;

  function getVersion(){
    const v = parseInt(localStorage.getItem(KEY_VERSION)||'0',10);
    return isNaN(v)?0:v;
  }

  function setVersion(v){ localStorage.setItem(KEY_VERSION, String(v)); }

  // Minimal, non-destructive migration hook
  function migrate(){
    let v = getVersion();
    if(v === 0){
      // Existing installs: keep everything, just stamp version.
      setVersion(CURRENT);
      return;
    }
    if(v < CURRENT){
      // Future: add migration steps here (never delete user data)
      setVersion(CURRENT);
    }
  }

  function exportAll(){
    const payload = { exported_at: new Date().toISOString(), schema_version: getVersion(), items: {} };
    for(let i=0;i<localStorage.length;i++){
      const k = localStorage.key(i);
      payload.items[k] = localStorage.getItem(k);
    }
    return payload;
  }

  function importAll(payload, mode){
    // mode: 'merge' (default) or 'replace'
    if(!payload || !payload.items) throw new Error('Fichier invalide');
    if(mode === 'replace'){
      localStorage.clear();
    }
    Object.keys(payload.items).forEach(k=>{
      if(mode === 'merge' && localStorage.getItem(k) !== null) return;
      localStorage.setItem(k, payload.items[k]);
    });
    // Keep or bump version
    try{
      const v = parseInt(payload.schema_version||'0',10);
      if(!isNaN(v) && v>getVersion()) setVersion(v);
    }catch(e){}
    migrate();
  }

  window.VIGIE_STORAGE_V46 = { getVersion, migrate, exportAll, importAll, CURRENT };
})();
