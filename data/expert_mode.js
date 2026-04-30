
// V31 — Mode expert persistant (local)
(function(){
  const KEY = "vigie_expert_mode";
  window.VIGIE = window.VIGIE || {};
  window.VIGIE.getExpertMode = function(){ return localStorage.getItem(KEY) === "1"; };
  window.VIGIE.setExpertMode = function(v){ localStorage.setItem(KEY, v ? "1":"0"); };
  window.VIGIE.toggleExpertMode = function(){ window.VIGIE.setExpertMode(!window.VIGIE.getExpertMode()); };
})();
