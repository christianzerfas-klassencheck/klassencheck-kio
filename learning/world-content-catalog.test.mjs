import test from "node:test";
import assert from "node:assert/strict";
import {worlds,volumeTasks,evaluateVolume} from "../learning/world-content-catalog.mjs";
test("zwölf eigenständige Welten für Jahrgänge 5 bis 10",()=>{
 assert.equal(worlds.length,12);
 assert.equal(new Set(worlds.map(w=>w.id)).size,12);
 for(let grade=5;grade<=10;grade++)assert.equal(worlds.filter(w=>w.grade===grade).length,2);
 for(const world of worlds)for(const key of ["title","concept","interaction","diagnostic"])assert.ok(world[key]);
});
test("Körperwerkstatt-Aufgaben mathematisch korrekt",()=>{
 for(const task of volumeTasks){
  assert.equal(evaluateVolume(task.dimensions,task.answer).correct,true);
  assert.equal(evaluateVolume(task.dimensions,task.answer+1).correct,false);
 }
 assert.throws(()=>evaluateVolume([2,0,2],8));
});
