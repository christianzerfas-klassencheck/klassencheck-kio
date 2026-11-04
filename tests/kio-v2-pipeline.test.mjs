import test from "node:test";
import assert from "node:assert/strict";
import {readFileSync} from "node:fs";
import {resolve} from "node:path";
const root=resolve(import.meta.dirname,"..");
const read=p=>readFileSync(resolve(root,p),"utf8");
test("Kio-2-Generator besitzt Skelett, Gesicht und GLB-Export",()=>{
 const src=read("tools/build_kio_character.py");
 for(const part of ["Kio_Rig","upper_arm.","forearm.","thigh.","head","Iris","Styled hair tuft","export_scene.gltf","export_skins=True"])
   assert.ok(src.includes(part),part);
});
test("Kio-2-Preview ist optional und hat einen Fallback",()=>{
 const html=read("index.html");
 assert.match(html,/kio2/);
 assert.match(html,/GLTFLoader/);
 assert.match(html,/kio-v2\.glb/);
 assert.match(html,/hero\.visible=false/);
 assert.match(html,/GLB NOCH NICHT EXPORTIERT/);
});
