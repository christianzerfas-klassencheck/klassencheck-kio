import * as T from 'three';
// Wrist targets use the opposite foot, not an independent animation clock.
export function createArmSwing(actor){
 const b=actor.bones,up=new T.Vector3(0,1,0),shoulder=new T.Vector3(),target=new T.Vector3(),dir=new T.Vector3(),pole=new T.Vector3(),elbow=new T.Vector3(),start=new T.Vector3(),v=new T.Vector3(),parentQ=new T.Quaternion(),worldQ=new T.Quaternion();
 const arms=['Left','Right'].map((side,i)=>({side,sign:i===0?1:-1,upper:b[side+'Arm'],lower:b[side+'ForeArm'],hand:b[side+'Hand'],l1:b[side+'ForeArm'].position.length(),l2:b[side+'Hand'].position.length()}));
 function align(bone,rest,end){bone.getWorldPosition(start);v.copy(end).sub(start).normalize();bone.parent.getWorldQuaternion(parentQ).invert();v.applyQuaternion(parentQ);bone.quaternion.setFromUnitVectors(start.copy(rest).normalize(),v);bone.updateWorldMatrix(false,true)}
 return {update(gait,weight){const root=actor.scene.position,yaw=actor.scene.rotation.y;for(const arm of arms){
  const opposite=gait.feet[arm.side==='Left'?1:0],forward=Math.sin(yaw)*(opposite.position.x-root.x)+Math.cos(yaw)*(opposite.position.z-root.z);
  arm.upper.getWorldPosition(shoulder);
  target.set(arm.sign*.025,-(arm.l1+arm.l2-.035),.025+T.MathUtils.clamp(forward*.75,-.15,.15)).applyAxisAngle(up,yaw).add(shoulder);
  dir.copy(target).sub(shoulder);const distance=T.MathUtils.clamp(dir.length(),.08,arm.l1+arm.l2-.012);dir.normalize();target.copy(shoulder).addScaledVector(dir,distance);
  pole.set(arm.sign*.15,0,1).applyAxisAngle(up,yaw);pole.addScaledVector(dir,-pole.dot(dir)).normalize();
  const along=(arm.l1*arm.l1-arm.l2*arm.l2+distance*distance)/(2*distance);
  elbow.copy(shoulder).addScaledVector(dir,along).addScaledVector(pole,Math.sqrt(Math.max(0,arm.l1*arm.l1-along*along)));
  const oldUpper=arm.upper.quaternion.clone(),oldLower=arm.lower.quaternion.clone(),oldHand=arm.hand.quaternion.clone();
  align(arm.upper,arm.lower.position,elbow);align(arm.lower,arm.hand.position,target);
  arm.upper.quaternion.slerpQuaternions(oldUpper,arm.upper.quaternion.clone(),weight);arm.lower.quaternion.slerpQuaternions(oldLower,arm.lower.quaternion.clone(),weight);actor.scene.updateMatrixWorld(true);
  // Preserve bind-space hand orientation instead of inheriting elbow twist.
  arm.hand.parent.getWorldQuaternion(parentQ).invert();worldQ.setFromAxisAngle(up,yaw);arm.hand.quaternion.copy(oldHand).slerp(parentQ.multiply(worldQ),weight);actor.scene.updateMatrixWorld(true);
 }} };
}
