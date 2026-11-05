import test from 'node:test';
import assert from 'node:assert/strict';
import {emptyProgress,loadProgress,saveProgress,recordProgress,clearProgress} from './local-progress.mjs';
function memory(){const data=new Map();return {getItem:k=>data.get(k)??null,setItem:(k,v)=>data.set(k,v),removeItem:k=>data.delete(k)}}
test('Jahrgangsmission und Proportionsstadt teilen ein Lernprofil',()=>{
 const store=memory();let p=emptyProgress();p=recordProgress(p,'P7-01','correct');p=recordProgress(p,'P7-B1','retry');p=recordProgress(p,'P7-B1','correct');
 assert.equal(saveProgress(store,p),true);const loaded=loadProgress(store);assert.equal(loaded.completed['P7-01'],true);assert.equal(loaded.completed['P7-B1'],true);assert.equal(loaded.attempts['P7-B1'],2);
 assert.equal(clearProgress(store),true);assert.deepEqual(loadProgress(store),emptyProgress());
});
test('Defekte oder gesperrte Speicherung führt nicht zum Absturz',()=>{
 const bad={getItem:()=>'{',setItem:()=>{throw Error('blocked')},removeItem:()=>{throw Error('blocked')}};
 assert.deepEqual(loadProgress(bad),emptyProgress());assert.equal(saveProgress(bad,emptyProgress()),false);assert.equal(clearProgress(bad),false);
});

test('Beschädigte Profilwerte werden entfernt und Versuchszähler bleiben numerisch',()=>{
 const damaged={completed:{'P7-01':true,'P7-B1':'yes'},attempts:{'P7-01':'9','P7-B1':-2,'G7-01':2}};
 const p=recordProgress(damaged,'P7-01','retry');
 assert.equal(p.attempts['P7-01'],1);
 assert.equal(p.attempts['G7-01'],2);
 assert.equal(p.attempts['P7-B1'],undefined);
 assert.equal(p.completed['P7-B1'],undefined);
 assert.equal(p.completed['P7-01'],true);
});
test('Ungültige Missions-IDs und Array-Profile werden ignoriert',()=>{
 assert.deepEqual(recordProgress([], 'P7-01','correct').completed,{});
 assert.deepEqual(recordProgress(emptyProgress(),'__proto__','correct'),emptyProgress());
 assert.deepEqual(recordProgress(emptyProgress(),'P7-01','correct').completed,{'P7-01':true});
});
