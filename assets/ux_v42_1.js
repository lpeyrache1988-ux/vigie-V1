// V42.1 — UX helpers (modal, toast, safe DOM inject)
// Conçu pour ne rien casser : ajoute seulement des utilitaires.
(function(){
  const VUX = {};

  function ensureModal(){
    if(document.getElementById('vux_modal')) return;
    const overlay = document.createElement('div');
    overlay.id = 'vux_modal';
    overlay.className = 'modalOverlay';
    overlay.style.display = 'none';
    overlay.innerHTML = `
      <div class="modal" role="dialog" aria-modal="true" onclick="event.stopPropagation()">
        <div class="modalTop">
          <div id="vux_modal_title" style="font-weight:900"></div>
          <div class="x" id="vux_modal_close" style="cursor:pointer">✕</div>
        </div>
        <div class="sep"></div>
        <div id="vux_modal_body" class="p"></div>
      </div>
    `;
    overlay.addEventListener('click', ()=>VUX.hideModal());
    document.body.appendChild(overlay);
    document.getElementById('vux_modal_close').addEventListener('click', ()=>VUX.hideModal());
  }

  VUX.showModal = function(title, bodyHTML){
    ensureModal();
    const o = document.getElementById('vux_modal');
    document.getElementById('vux_modal_title').textContent = title || '';
    document.getElementById('vux_modal_body').innerHTML = bodyHTML || '';
    o.style.display = 'flex';
  };

  VUX.hideModal = function(){
    const o = document.getElementById('vux_modal');
    if(o) o.style.display = 'none';
  };

  // Toast (non-bloquant)
  VUX.toast = function(msg, ms){
    ms = ms || 2200;
    const t = document.createElement('div');
    t.style.position='fixed';
    t.style.left='50%';
    t.style.bottom='16px';
    t.style.transform='translateX(-50%)';
    t.style.padding='10px 12px';
    t.style.border='1px solid rgba(0,0,0,.08)';
    t.style.borderRadius='12px';
    t.style.background='white';
    t.style.boxShadow='0 10px 22px rgba(0,0,0,.10)';
    t.style.zIndex='9999';
    t.textContent = msg || '';
    document.body.appendChild(t);
    setTimeout(()=>{ try{ t.remove(); }catch(e){} }, ms);
  };

  // Safe inject helpers
  VUX.prependTo = function(selector, html){
    const el = document.querySelector(selector);
    if(!el) return false;
    const d = document.createElement('div');
    d.innerHTML = html;
    el.prepend(d);
    return true;
  };

  VUX.insertBefore = function(targetSelector, html){
    const el = document.querySelector(targetSelector);
    if(!el || !el.parentNode) return false;
    const d = document.createElement('div');
    d.innerHTML = html;
    el.parentNode.insertBefore(d, el);
    return true;
  };

  window.VUX = VUX;
})();
