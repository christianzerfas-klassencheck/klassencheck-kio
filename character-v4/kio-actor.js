import * as T from 'three';
import{buildKioNext}from'./avatar-next.js';
// Transitional rig for performance validation. Not the approved production mesh.
export function buildKioActor(){
 const actor=buildKioNext(),face=actor.face,g=face.geometry,p=g.getAttribute('position'),wide=[],round=[];
 for(let i=0;i<p.count;i++){const x=p.getX(i),y=p.getY(i),z=p.getZ(i);const w=z>.07?Math.exp(-Math.pow(x/.044,4)-Math.pow((y+.046)/.018,4)):0;wide.push(x*.18*w,0,0);round.push(-x*.22*w,0,.003*w)}
 g.morphAttributes.position.push(new T.Float32BufferAttribute(wide,3),new T.Float32BufferAttribute(round,3));face.updateMorphTargets();face.morphTargetDictionary={mouthOpen:0,smile:1,mouthWide:2,mouthRound:3};
 actor.setMouth=({open=0,wide=0,round=0})=>{face.morphTargetInfluences[0]=T.MathUtils.clamp(open,0,1);face.morphTargetInfluences[2]=T.MathUtils.clamp(wide,0,1);face.morphTargetInfluences[3]=T.MathUtils.clamp(round,0,1)};
 actor.scene.name='Kio_Performance_Proxy';return actor;
}
