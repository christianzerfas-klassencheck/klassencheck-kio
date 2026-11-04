import test from "node:test";
import assert from "node:assert/strict";
import {readFileSync} from "node:fs";
import {resolve} from "node:path";
const html=readFileSync(resolve(import.meta.dirname,"../index.html"),"utf8");
test("3D-Bruchbrücke enthält drei aufeinanderfolgende Etappen",()=>{
  assert.match(html,/const missionRounds=\[/);
  assert.match(html,/gleichwertig zu ½/);
  assert.match(html,/¾ oder ⅔/);
  assert.match(html,/round\+1/);
  assert.match(html,/round\+\+/);
});
test("3D-Bruchbrücke bietet Fehlerrückmeldung und Abschluss",()=>{
  assert.match(html,/index!==item\.correct/);
  assert.match(html,/errors\+\+/);
  assert.match(html,/success=true/);
  assert.match(html,/Zur Akademie/);
});
