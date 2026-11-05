import test from 'node:test';
import assert from 'node:assert/strict';
import {missions,assess} from './grade7-10-missions.mjs';
import {makeMissionState,recordAttempt,recordHint,selectNextMission} from './adaptive-mission-engine.mjs';
test('Fehlversuch löst passgenaue Hilfe aus',()=>{
 const mission=missions[0],start=makeMissionState(mission);
 const r=recordAttempt(start,mission,String(mission.wrong),assess);
 assert.equal(r.result.status,'misconception');
 assert.equal(r.nextAction,'concept-model');
 assert.equal(r.state.attempts,1);
 assert.equal(start.attempts,0);
});
test('Erfolg wird registriert und nächste Mission vorgeschlagen',()=>{
 const m=missions[0],start=makeMissionState(m);
 const result=recordAttempt(start,m,String(m.answer),assess);
 assert.equal(result.state.completed,true);
 assert.equal(result.nextAction,'transfer');
 assert.equal(selectNextMission(missions,m,[m.id]).grade,7);
});
test('Hinweise und Fehlerhistorie werden erfasst',()=>{
 const m=missions[1],s=recordHint(makeMissionState(m));
 assert.equal(s.hints,1);
 let current=s;for(let i=0;i<12;i++)current=recordAttempt(current,m,'9999',assess).state;
 assert.equal(current.attempts,12);assert.equal(current.history.length,10);
});
