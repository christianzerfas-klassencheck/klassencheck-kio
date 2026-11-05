import test from 'node:test';
import assert from 'node:assert/strict';
import {missions,assess} from './grade7-10-missions.mjs';
test('Acht eindeutige Pilotmissionen, zwei pro Jahrgang 7–10',()=>{
 assert.equal(missions.length,8);
 assert.equal(new Set(missions.map(m=>m.id)).size,8);
 for(let year=7;year<=10;year++)assert.equal(missions.filter(m=>m.grade===year).length,2);
});
test('Korrekte, falsche und leere Antworten unterscheiden',()=>{
 for(const m of missions){
  assert.equal(assess(m,String(m.answer)).status,'correct',m.id);
  assert.equal(assess(m,String(m.wrong)).status,'misconception',m.id);
  assert.equal(assess(m,'').status,'invalid',m.id);
  assert.equal(assess(m,'abc').status,'invalid',m.id);
  assert.ok(m.hint.length>15&&m.explain.length>15);
 }
});
test('Antworten lassen Dezimalkomma zu',()=>{
 const m={answer:2.5,wrong:3,hint:'Hinweis',diagnostic:'Fehler',explain:'Erklärung'};
 assert.equal(assess(m,'2,5').status,'correct');
});
