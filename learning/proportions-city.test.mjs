import test from 'node:test';
import assert from 'node:assert/strict';
import {deliveryLevels,calculateDelivery,checkDelivery} from './proportions-city.mjs';
test('Brueckenaufgaben korrekt',()=>{for(const l of deliveryLevels){assert.equal(calculateDelivery(l,l.target).total,l.answer);assert.equal(checkDelivery(l,l.target,String(l.answer)).status,'correct');assert.equal(checkDelivery(l,l.target-1,String(l.answer)).status,'build');assert.equal(checkDelivery(l,l.target,'').status,'empty')}});
test('Verhaeltnis bleibt konstant',()=>{for(const l of deliveryLevels){for(let n=1;n<=10;n++)assert.equal(calculateDelivery(l,n).total,n*calculateDelivery(l,1).perField)}});
