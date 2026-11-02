import * as T from 'three';
// Dedicated torso poses. No feet, gait clocks or walking arm swing.
export function createHoverArms(actor){
 const b=actor.bones,up=new T.Vector3(0,1,0),shoulder=new T.Vector3(),wrist=new T.Vector3(),direction=new T.Vector3(),pole=new T.Vector3(),elbow=new T.Vector3(),start=new T.Vector3(),v=new T.Vector3(),parentQ=new T.Quaternion(),matrix=new T.Matrix4(),x=new T.Vector3(),y=new T.Vector3(),z=new T.Vector3();
 const arms=['Left','Right'].map((side,i)=>{const holder=actor.scene.getObjectByName(side+'AnatomicalHand').parent;return{side,sign:i===0?1:-1,upper:b[side+'Arm'],lower:b[side+'ForeArm'],hand:b[side+'Hand'],l1:b[side+'ForeArm'].position.length(),l2:b[side+'Hand'].position.length(),basisInverse:holder.quaternion.clone().invert()}});
 const align=(bone,rest,end)=>{bone.getWorldPosition(start);v.copy(end).sub(start).normalize();bone.parent.getWorldQuaternion(parentQ).invert();v.applyQuaternion(parentQ);bone.quaternion.setFromUnitVectors(start.copy(rest).normalize(),v);bone.updateWorldMatrix(false,true)};
 return{update(dt,{gesture=0,reduced=false,present=false}={}){const yaw=actor.scene.rotation.y;const pulse=reduced?0:T.MathUtils.clamp(gesture,0,1);for(const arm of arms){
  arm.upper.getWorldPosition(shoulder);const active=arm.side==='Right'?(present?.7:pulse):pulse*.18;
  // Wrists stay beside the waist, with an elbow bend and room between the hands.
  wrist.set(arm.sign*(.245+active*.035),1.045+active*.20,.075+active*.14).applyAxisAngle(up,yaw).add(actor.scene.position);
  direction.copy(wrist).sub(shoulder);const distance=T.MathUtils.clamp(direction.length(),.10,arm.l1+arm.l2-.02);direction.normalize();wrist.copy(shoulder).addScaledVector(direction,distance);
  pole.set(arm.sign*.06,-.05,1).applyAxisAngle(up,yaw);pole.addScaledVector(direction,-pole.dot(direction)).normalize();const along=(arm.l1*arm.l1-arm.l2*arm.l2+distance*distance)/(2*distance);
  elbow.copy(shoulder).addScaledVector(direction,along).addScaledVector(pole,Math.sqrt(Math.max(0,arm.l1*arm.l1-along*along)));
  align(arm.upper,arm.lower.position,elbow);align(arm.lower,arm.hand.position,wrist);
  // Align the actual palm/finger basis with the forearm; the old world-fixed wrist is removed.
  arm.lower.getWorldPosition(elbow);x.copy(wrist).sub(elbow).normalize().multiplyScalar(arm.sign);
  y.set(-arm.sign,.35+active*.7,.12).applyAxisAngle(up,yaw).multiplyScalar(arm.sign);y.addScaledVector(x,-y.dot(x)).normalize();z.crossVectors(x,y).normalize();y.crossVectors(z,x).normalize();matrix.makeBasis(x,y,z);
  const desired=new T.Quaternion().setFromRotationMatrix(matrix).multiply(arm.basisInverse);arm.hand.parent.getWorldQuaternion(parentQ).invert();arm.hand.quaternion.copy(parentQ.multiply(desired));actor.scene.updateMatrixWorld(true);
 }actor.setHandPose(pulse>.3||present?'open':'relaxed',1-Math.exp(-5*Math.max(0,dt)));}};
}
