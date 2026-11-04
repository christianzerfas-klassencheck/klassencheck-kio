import test from "node:test";
import assert from "node:assert/strict";
import {readFileSync} from "node:fs";
import {resolve} from "node:path";
const html=readFileSync(resolve(import.meta.dirname,"../index.html"),"utf8");
test("3D-Tafel ist aus dem Missionsablauf aufrufbar",()=>{
 assert.match(html,/updateFractionBoard=\(\)=>\{\}/);
 assert.match(html,/updateFractionBoard=function\(index\)/);
 assert.match(html,/function showRound\(\)\{updateFractionBoard\(round\)/);
});
test("Touch-Auswahl trifft echte Bruchsegmente",()=>{
 assert.match(html,/new THREE\.Raycaster\(\)/);
 assert.match(html,/addEventListener\('pointerup'/);
 assert.match(html,/intersectObjects\(fractionBoard\.children,false\)/);
 assert.match(html,/answer\(choice\)/);
});
test("Reduzierte Bewegung und alternative Antworttasten vorhanden",()=>{
 assert.match(html,/prefers-reduced-motion: reduce/);
 assert.match(html,/Antworttasten/);
 assert.match(html,/setButtons\(item\.options\.map/);
});
