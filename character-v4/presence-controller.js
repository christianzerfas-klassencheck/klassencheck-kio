// Deterministic attention: eyes lead, head follows, chest supports the look.
const clamp=(x,a,b)=>Math.max(a,Math.min(b,x));
const ease=(a,b,rate,dt)=>a+(b-a)*(1-Math.exp(-rate*dt));
export function createPresenceController(){
 let eyeYaw=0,eyePitch=0,headYaw=0,headPitch=0,chestYaw=0,warmth=0,focus=0;
 return {update(dt,{yaw=0,pitch=0,speaking=false,gesture=0,moving=false,turning=false,reduced=false}={}){
  dt=clamp(Number.isFinite(dt)?dt:0,0,.05);yaw=clamp(Number.isFinite(yaw)?yaw:0,-.85,.85);pitch=clamp(Number.isFinite(pitch)?pitch:0,-.24,.24);
  // Small eye motion is retained in reduced mode; all secondary body acting is removed.
  const headTarget=reduced?0:yaw*.68;
  eyeYaw=ease(eyeYaw,yaw,22,dt);eyePitch=ease(eyePitch,pitch,20,dt);
  headYaw=ease(headYaw,headTarget,7,dt);headPitch=ease(headPitch,reduced?0:pitch*.65,6,dt);
  chestYaw=ease(chestYaw,reduced||moving||turning?0:yaw*.14,3.5,dt);
  warmth=ease(warmth,reduced?0:speaking?.22+.14*clamp(gesture,0,1):moving?0:.13,5,dt);
  focus=ease(focus,reduced?0:turning?.28:speaking?.1:0,5,dt);
  return {headYaw,headPitch,chestYaw,eyeX:clamp((eyeYaw-headYaw-chestYaw)/.32,-1,1),eyeY:clamp((eyePitch-headPitch)/.16,-1,1),warmth,focus,tilt:reduced||moving||turning?0:-headYaw*.055};
 }};
}
