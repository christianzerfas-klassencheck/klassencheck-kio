import test from "node:test";
import assert from "node:assert/strict";
import {missions,equivalent,compareFractions,evaluateMission} from "./grade6-diagnostic-missions.mjs";
test("sechs eindeutige Missionen und Transfer-Verweise",()=>{
 assert.equal(missions.length,6);
 assert.equal(new Set(missions.map(m=>m.id)).size,6);
 for(const m of missions){assert.ok(m.options[m.correct]!==undefined);if(m.transfer)assert.ok(missions.some(x=>x.id===m.transfer));}
});
test("exakte Bruchäquivalenz ohne Rundungsfehler",()=>{
 assert.equal(equivalent([1,2],[2,4]),true);
 assert.equal(equivalent([2,3],[4,6]),true);
 assert.equal(equivalent([1,2],[2,3]),false);
 assert.equal(equivalent([1,0],[1,2]),false);
});
test("Bruchvergleich",()=>{
 assert.equal(compareFractions([3,4],[2,3]),1);
 assert.equal(compareFractions([3,5],[5,8]),-1);
 assert.equal(compareFractions([2,4],[1,2]),0);
 assert.throws(()=>compareFractions([1,0],[1,2]));
});
test("Rückmeldung und Folgeaufgabe",()=>{
 assert.equal(evaluateMission("F01-01",0).nextId,"F01-02");
 assert.equal(evaluateMission("F04-01",2).correct,false);
 assert.equal(evaluateMission("G01-01",1).correct,true);
 assert.equal(evaluateMission("G01-01",-1).kind,"no-choice");
 assert.throws(()=>evaluateMission("unbekannt",0));
});
