import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
const html=readFileSync(new URL('../prototype/proportionsstadt.html',import.meta.url),'utf8');
const world=readFileSync(new URL('../learning/proportions-world-3d.mjs',import.meta.url),'utf8');
test('3D Welt ist mit der Brückenmission verbunden',()=>{assert.match(html,/id="world3d"/);assert.match(html,/mountProportionsWorld/);assert.match(world,/MutationObserver/);assert.match(world,/rebuild\(count\)/)});
test('2D Fallback und Mobiloptimierung bleiben vorhanden',()=>{assert.match(html,/<svg id="scene"/);assert.match(html,/catch\(error\)/);assert.match(world,/devicePixelRatio/);assert.match(world,/ResizeObserver/);assert.match(world,/prefers-reduced-motion/)});
