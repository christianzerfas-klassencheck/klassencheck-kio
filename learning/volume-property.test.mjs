import test from "node:test";
import assert from "node:assert/strict";
import {evaluateVolume} from "./world-content-catalog.mjs";

test("Körperwerkstatt: 1000 systematische Volumenfälle",()=>{
 let count=0;
 for(let a=1;a<=10;a++)for(let b=1;b<=10;b++)for(let c=1;c<=10;c++){
  const expected=a*b*c;
  const actual=evaluateVolume([a,b,c],expected);
  assert.deepEqual(actual,{correct:true,expected});
  assert.equal(evaluateVolume([a,b,c],expected+1).correct,false);
  count++;
 }
 assert.equal(count,1000);
});
test("Volumen bleibt bei Drehung des Quaders gleich",()=>{
 for(let a=1;a<=8;a++)for(let b=1;b<=8;b++)for(let c=1;c<=8;c++){
  const answer=a*b*c;
  for(const dims of [[a,b,c],[b,c,a],[c,a,b]])assert.equal(evaluateVolume(dims,answer).correct,true);
 }
});
test("Ungültige Eingaben werden abgelehnt",()=>{
 for(const dims of [[0,2,2],[-1,2,2],[1.5,2,2],[2,2],[2,2,Infinity]])assert.throws(()=>evaluateVolume(dims,4));
 for(const answer of [NaN,Infinity,12.5,"12",null])assert.equal(evaluateVolume([3,2,2],answer).correct,false);
});
