import * as T from 'three';
import{buildKioNext}from'./avatar-next.js?v=13';
// Transitional rig for performance validation. Not the approved production mesh.
export function buildKioActor(){
 const actor=buildKioNext(),face=actor.face,g=face.geometry,p=g.getAttribute('position'),wide=[],round=[];
 for(let i=0;i<p.count;i++){const x=p.getX(i),y=p.getY(i),z=p.getZ(i);const w=z>.07?Math.exp(-Math.pow(x/.044,4)-Math.pow((y+.046)/.018,4)):0;wide.push(x*.18*w,0,0);round.push(-x*.22*w,0,.003*w)}
 g.morphAttributes.position.push(new T.Float32BufferAttribute(wide,3),new T.Float32BufferAttribute(round,3));face.updateMorphTargets();face.morphTargetDictionary={mouthOpen:0,smile:1,mouthWide:2,mouthRound:3};
 actor.setMouth=({open=0,wide=0,round=0})=>{face.morphTargetInfluences[0]=T.MathUtils.clamp(open,0,1);face.morphTargetInfluences[2]=T.MathUtils.clamp(wide,0,1);face.morphTargetInfluences[3]=T.MathUtils.clamp(round,0,1)};
 const originalExpression=actor.setExpression;
 const cheek=[],brow=[];for(let i=0;i<p.count;i++){const x=p.getX(i),y=p.getY(i),z=p.getZ(i),front=z>.065?1:0;const c=front*Math.exp(-(((Math.abs(x)-.042)/.023)**2)-((y+.011)/.025)**2);const f=front*Math.exp(-((x/.055)**4)-((y-.059)/.024)**2);cheek.push(0,.0025*c,.0007*c);brow.push(0,-.0015*f,.0004*f)}
 g.morphAttributes.position.push(new T.Float32BufferAttribute(cheek,3),new T.Float32BufferAttribute(brow,3));face.updateMorphTargets();
 actor.setExpression=(values={})=>{originalExpression(values);face.morphTargetInfluences[4]=T.MathUtils.clamp(values.warmth||0,0,1);face.morphTargetInfluences[5]=T.MathUtils.clamp(values.focus||0,0,1);for(let i=0;i<2;i++){const brow=actor.scene.getObjectByName('KioBrow'+i);if(brow){brow.position.y=(values.warmth||0)*.002-(values.focus||0)*.001;brow.rotation.z=(i===0?-1:1)*((values.warmth||0)*.035+(values.focus||0)*.02)}}};
 actor.scene.name='Kio_Performance_Proxy';return actor;
}


