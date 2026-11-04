import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
const html=readFileSync(new URL('../prototype/koerperwerkstatt.html',import.meta.url),'utf8');
const academy=readFileSync(new URL('../prototype/diagnoselabor-integration.html',import.meta.url),'utf8');
test('Werkstatt mit Akademie verbunden',()=>assert.match(academy,/koerperwerkstatt\.html/));
test('Spielbare Lernhandlung umfasst Bausteuerung, Ansicht und Diagnose',()=>{
 for(const token of ['data-axis="x"','data-axis="y"','data-axis="z"','id="rotate"','id="check"','id="next"','evaluateVolume(dimensions','dimensions.some','canvas','aria-live="polite"'])
 assert.ok(html.includes(token),'Fehlende Funktion: '+token);
});
test('Keine direkte Lösung vor Erreichen der Zielabmessungen',()=>{
 assert.ok(html.indexOf('dimensions.some((d,i)=>d!==tasks[step].dimensions[i])')<html.indexOf('evaluateVolume(dimensions'));
});
