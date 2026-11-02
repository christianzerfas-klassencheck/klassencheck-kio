import * as T from 'three';
import{buildKioActor}from'./kio-actor.js?v=7';
import{createArmSwing}from'./arm-swing.js?v=8';
export function buildHoverActor(){
 const actor=buildKioActor();
 actor.scene.getObjectByName('Kio_trousers').visible=false;
 for(const side of['Left','Right'])for(const child of actor.bones[side+'Foot'].children)child.visible=false;
 const jacket=actor.scene.getObjectByName('Kio_jacket');
 jacket.material=jacket.material.clone();jacket.material.transparent=true;jacket.material.alphaTest=.02;
 jacket.material.onBeforeCompile=shader=>{shader.vertexShader='varying float kioHeight;\n'+shader.vertexShader;shader.vertexShader=shader.vertexShader.replace('#include <skinning_vertex>','#include <skinning_vertex>\nkioHeight=transformed.y;');shader.fragmentShader='varying float kioHeight;\n'+shader.fragmentShader;shader.fragmentShader=shader.fragmentShader.replace('#include <alphatest_fragment>','diffuseColor.a *= smoothstep(.985,1.12,kioHeight);\n#include <alphatest_fragment>')};
 jacket.material.customProgramCacheKey=()=> 'kio-hover-waist-v9';jacket.castShadow=false;
 const glow=new T.MeshBasicMaterial({color:'#71e7d0',transparent:true,opacity:.26,depthWrite:false});
 const halo=new T.Mesh(new T.TorusGeometry(.17,.006,8,64),glow);halo.rotation.x=Math.PI/2;halo.position.set(0,.96,.01);actor.scene.add(halo);
 const tail=new T.Mesh(new T.ConeGeometry(.14,.22,32,1,true),glow.clone());tail.rotation.z=Math.PI;tail.position.set(0,.87,.01);tail.material.opacity=.07;tail.material.side=T.DoubleSide;actor.scene.add(tail);
 actor.scene.name='Kio_Hover_Companion';return actor;
}
export function hoverTravel(t){t=T.MathUtils.clamp(t,0,1);return t*t*t*(t*(t*6-15)+10)}
export function createHoverMotion(actor){
 const b=actor.bones,rest=Object.fromEntries(Object.entries(b).map(([k,v])=>[k,v.position.clone()])),swing=createArmSwing(actor),q=new T.Quaternion(),e=new T.Euler();let mode='Listen',clock=0;
 const rotate=(name,x,y,z,dt)=>{q.setFromEuler(e.set(x,y,z));b[name].quaternion.slerp(q,1-Math.exp(-7*dt))};
 return{setMode(value){mode=value},update(dt,{reduced=false,speaking=false,speechGesture=0,lookYaw=0,lookPitch=0,chestYaw=0,headTilt=0}={}){
  dt=T.MathUtils.clamp(Number.isFinite(dt)?dt:0,0,.05);clock+=dt;
  b.Hips.position.copy(rest.Hips);b.Hips.position.y+=reduced?0:.012*Math.sin(clock*1.3);
  rotate('Hips',0,0,0,dt);rotate('Spine',0,0,0,dt);rotate('Chest',0,chestYaw,0,dt);
  rotate('Neck',lookPitch*.25,lookYaw*.3,0,dt);rotate('Head',lookPitch*.75,lookYaw*.7,reduced?0:headTilt,dt);
  // Relaxed arms with a small, audio-timed invitation gesture. No walking input.
  actor.scene.updateMatrixWorld(true);const root=actor.scene.position,yaw=actor.scene.rotation.y,beat=speaking&&!reduced?T.MathUtils.clamp(speechGesture,0,1):0;
  const feet=[-1,1].map(sign=>({position:new T.Vector3(sign*.13,0,.045+(sign===-1?beat*.10:0)).applyAxisAngle(new T.Vector3(0,1,0),yaw).add(root)}));
  swing.update({feet},1);actor.setHandPose(beat>.25?'open':'relaxed',1-Math.exp(-5*dt));
  return{settled:true,mode};
 }};
}

export const turnToward=(a,b,dt)=>a+Math.atan2(Math.sin(b-a),Math.cos(b-a))*(1-Math.exp(-4*Math.max(0,dt)));
