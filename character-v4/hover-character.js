import * as T from 'three';
import{buildKioActor}from'./kio-actor.js?v=10';
import{createArmSwing}from'./arm-swing.js?v=8';
export function buildHoverActor(){
 const actor=buildKioActor();
 actor.scene.traverse(mesh=>{if(!mesh.material)return;for(const m of(Array.isArray(mesh.material)?mesh.material:[mesh.material])){const hex=m.color?.getHexString();if(hex==='3d6460')m.color.set('#344d78');if(hex==='345854')m.color.set('#2a3b60');if(hex==='b5b7a6')m.color.set('#bbcbd6');if(hex==='c09980')m.color.set('#c69b81')}});
 const badge=new T.Mesh(new T.CircleGeometry(.027,32),new T.MeshStandardMaterial({color:'#ef9c73',roughness:.55,side:T.DoubleSide}));
 const chest=actor.bones.Chest;badge.position.set(.09,.028,.17);chest.add(badge);
 const mark=new T.Mesh(new T.ConeGeometry(.009,.028,3),new T.MeshStandardMaterial({color:'#223554',roughness:.7}));mark.rotation.z=-.35;mark.position.set(.09,.03,.174);chest.add(mark);

 actor.scene.getObjectByName('Kio_trousers').visible=false;
 for(const side of['Left','Right'])for(const child of actor.bones[side+'Foot'].children)child.visible=false;
 const jacket=actor.scene.getObjectByName('Kio_jacket');
 const positions=jacket.geometry.getAttribute('position'),colors=[];const baseColor=new T.Color('#ffffff'),accentColor=new T.Color('#efab87');let badgeZ=.12;for(let i=0;i<positions.count;i++){const x=positions.getX(i),y=positions.getY(i),z=positions.getZ(i);const accent=y>1.41&&y<1.46&&Math.abs(x)>.12&&Math.abs(x)<.29;colors.push(...(accent?accentColor:baseColor).toArray());if(Math.abs(x-.09)<.035&&Math.abs(y-1.391)<.035)badgeZ=Math.max(badgeZ,z)}
 jacket.geometry.setAttribute('color',new T.Float32BufferAttribute(colors,3));badge.position.z=badgeZ-chest.position.z+.006;mark.position.z=badge.position.z+.004;

 jacket.material=jacket.material.clone();jacket.material.transparent=true;jacket.material.alphaTest=.02;jacket.material.vertexColors=true;
 jacket.material.onBeforeCompile=shader=>{shader.vertexShader='varying float kioHeight;\n'+shader.vertexShader;shader.vertexShader=shader.vertexShader.replace('#include <skinning_vertex>','#include <skinning_vertex>\nkioHeight=transformed.y;');shader.fragmentShader='varying float kioHeight;\n'+shader.fragmentShader;shader.fragmentShader=shader.fragmentShader.replace('#include <alphatest_fragment>','diffuseColor.a *= smoothstep(.985,1.12,kioHeight);\n#include <alphatest_fragment>')};
 jacket.material.customProgramCacheKey=()=> 'kio-hover-waist-v9';jacket.castShadow=false;
 const glow=new T.MeshBasicMaterial({color:'#88c7ed',transparent:true,opacity:.26,depthWrite:false});
 const halo=new T.Mesh(new T.TorusGeometry(.17,.006,8,64),glow);halo.rotation.x=Math.PI/2;halo.position.set(0,.96,.01);actor.scene.add(halo);
 const tail=new T.Mesh(new T.ConeGeometry(.14,.22,32,1,true),glow.clone());tail.rotation.z=Math.PI;tail.position.set(0,.87,.01);tail.material.opacity=.07;tail.material.side=T.DoubleSide;actor.scene.add(tail);
 actor.scene.name='Kio_Hover_Companion';return actor;
}
export function hoverTravel(t){t=T.MathUtils.clamp(t,0,1);return t*t*t*(t*(t*6-15)+10)}
export function createHoverMotion(actor){
 const b=actor.bones,rest=Object.fromEntries(Object.entries(b).map(([k,v])=>[k,v.position.clone()])),swing=createArmSwing(actor),q=new T.Quaternion(),e=new T.Euler();let mode='Listen',clock=0;
 const rotate=(name,x,y,z,dt)=>{q.setFromEuler(e.set(x,y,z));b[name].quaternion.slerp(q,1-Math.exp(-7*dt))};
 return{setMode(value){mode=value},update(dt,{reduced=false,speaking=false,speechGesture=0,lookYaw=0,lookPitch=0,chestYaw=0,headTilt=0,turnAmount=0,moving=false}={}){
  dt=T.MathUtils.clamp(Number.isFinite(dt)?dt:0,0,.05);clock+=dt;
  b.Hips.position.copy(rest.Hips);b.Hips.position.y+=reduced?0:.012*Math.sin(clock*1.3);
  const turn=reduced?0:T.MathUtils.clamp(turnAmount,-1,1),breath=reduced?0:Math.sin(clock*1.3);
  rotate('Hips',moving&&!reduced?.015:0,0,-turn*.035,dt);rotate('Spine',breath*.004,turn*.045,turn*.012,dt);rotate('Chest',breath*.004,chestYaw+turn*.065,-turn*.012,dt);
  rotate('Neck',lookPitch*.25,lookYaw*.3,0,dt);rotate('Head',lookPitch*.75,lookYaw*.7,reduced?0:headTilt,dt);
  // Relaxed arms with a small, audio-timed invitation gesture. No walking input.
  actor.scene.updateMatrixWorld(true);const root=actor.scene.position,yaw=actor.scene.rotation.y,beat=speaking&&!reduced?T.MathUtils.clamp(speechGesture,0,1):0;
  const feet=[-1,1].map(sign=>({position:new T.Vector3(sign*.13,0,.045+(sign===-1?beat*.10:0)).applyAxisAngle(new T.Vector3(0,1,0),yaw).add(root)}));
  swing.update({feet},1);actor.setHandPose(beat>.25?'open':'relaxed',1-Math.exp(-5*dt));
  return{settled:true,mode};
 }};
}

export const turnToward=(a,b,dt)=>{dt=Math.min(.05,Math.max(0,Number.isFinite(dt)?dt:0));const delta=Math.atan2(Math.sin(b-a),Math.cos(b-a));return a+T.MathUtils.clamp(delta*(1-Math.exp(-5*dt)),-1.8*dt,1.8*dt)};
