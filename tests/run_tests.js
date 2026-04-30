const fs = require('fs');
const path = require('path');
const vm = require('vm');

function loadScript(ctx, p){
  const code = fs.readFileSync(p, 'utf8');
  vm.runInContext(code, ctx, { filename: p });
}

function makeContext(){
  const store = new Map();
  const localStorage = {
    getItem: (k)=> store.has(k) ? store.get(k) : null,
    setItem: (k,v)=> { store.set(k, String(v)); },
    removeItem: (k)=> { store.delete(k); }
  };
  const ctx = vm.createContext({
    window: {},
    localStorage,
    console,
    alert: (msg)=>{ /* ignore in tests */ },
  });
  // window should reference global
  ctx.window = ctx;
  return ctx;
}

function main(){
  const root = path.join(__dirname, '..');
  const ctx = makeContext();

  // Load data scripts in the same order as the app.
  loadScript(ctx, path.join(root, 'data', 'flows_v30.js'));
  loadScript(ctx, path.join(root, 'data', 'scenarios_v2.js'));
  loadScript(ctx, path.join(root, 'data', 'engine_v30.js'));

  const casesFile = process.argv[2] || 'cases.json';
  const cases = JSON.parse(fs.readFileSync(path.join(__dirname, casesFile), 'utf8'));

  let pass = 0;
  let fail = 0;
  const rows = [];

  for(const tc of cases){
    const flow = ctx.V30.matchFlow(tc.query);
    const scen = (ctx.VIGIE_MATCH_SCENARIO ? ctx.VIGIE_MATCH_SCENARIO(tc.query) : null);
    const inputs = Object.assign({}, tc.answers || {});
    if(scen && scen.pack_id) inputs.__pack_id = scen.pack_id;
    if(scen && scen.checklist_id) inputs.__checklist_id = scen.checklist_id;
    if(scen && scen.force_strategy) inputs.__strategy_key = scen.force_strategy;
    const result = ctx.V30.evalFlow(flow, inputs);

    const okFlow = flow.id === tc.expectFlow;
    const okStrat = result.strategy_key === tc.expectStrategy;
    const okPack = (result.pack_id || null) === (tc.expectPack || null);

    // Main success criteria: correct orientation (flow) + correct action bundle (pack)
    const ok = okFlow && okPack;
    if(ok) pass++; else fail++;

    rows.push({
      id: tc.id,
      query: tc.query,
      gotFlow: flow.id,
      expFlow: tc.expectFlow,
      gotStrategy: result.strategy_key,
      expStrategy: tc.expectStrategy,
      gotPack: result.pack_id || null,
      expPack: tc.expectPack || null,
      severity: result.severity,
      score: result.score,
      ok
    });
  }

  // Write a markdown report
  const lines = [];
  lines.push(`# Rapport de tests — Vigie V40`);
  lines.push('');
  lines.push(`Total: **${cases.length}** — ✅ Pass: **${pass}** — ❌ Fail: **${fail}**`);
  lines.push('');

  for(const r of rows){
    if(r.ok) continue;
    lines.push(`## ❌ Cas #${r.id}`);
    lines.push(`- Requête: ${r.query}`);
    lines.push(`- Flow: attendu **${r.expFlow}**, obtenu **${r.gotFlow}**`);
    lines.push(`- Stratégie: attendu **${r.expStrategy}**, obtenu **${r.gotStrategy}**`);
    lines.push(`- Pack: attendu **${r.expPack}**, obtenu **${r.gotPack}**`);
    lines.push(`- Score/Sévérité: ${r.score} / ${r.severity}`);
    lines.push('');
  }

  const outPath = path.join(__dirname, 'TEST_REPORT.md');
  fs.writeFileSync(outPath, lines.join('\n'), 'utf8');

  if(fail > 0){
    process.exitCode = 1;
  }

  console.log(`Done. Pass=${pass} Fail=${fail}. Report: ${outPath}`);
}

main();