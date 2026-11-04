import test from "node:test";
import assert from "node:assert/strict";
import {readFileSync,existsSync} from "node:fs";
import {resolve,dirname} from "node:path";
const root=resolve(import.meta.dirname,"..");
const read=path=>readFileSync(resolve(root,path),"utf8");
test("Akademie bindet alle lokalen Skripte ein",()=>{
  const html=read("prototype/diagnoselabor-integration.html");
  const refs=[...html.matchAll(/<script\s+src="([^"]+)"/g)].map(m=>m[1]);
  assert.ok(refs.length>=4);
  for(const ref of refs)assert.ok(existsSync(resolve(root,"prototype",ref)),ref+" fehlt");
});
test("3D-Szene und Akademie sind verlinkt",()=>{
  assert.match(read("index.html"),/prototype\/diagnoselabor-integration\.html/);
  assert.match(read("prototype/diagnoselabor-integration.html"),/\.\.\/index\.html/);
});
test("lokale Daten können im Prototyp gelöscht werden",()=>{
  const src=read("prototype/local-data-controls.js");
  for(const key of ["klassencheck-alpha-diagnose-v1","kc-demo-fraction","kc-demo-cube"])assert.ok(src.includes(key));
  assert.match(src,/localStorage\.removeItem/);
});
test("Kio und Würfelwerkstatt sind eingebunden",()=>{
  const html=read("prototype/diagnoselabor-integration.html");
  for(const file of ["cube-workshop.js","kio-guide.js","learning-diagnostics.js","local-data-controls.js"])assert.ok(html.includes(file));
});
