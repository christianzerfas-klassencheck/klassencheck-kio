// KlassenCheck: lebendige Raumarchitektur und mathematische Umgebungsobjekte.
// Wird aus dem Three.js-Modul mit initLearningWorld(THREE,scene) aufgerufen.
export function initLearningWorld(THREE,scene){
 const mat=(hex,metalness=0)=>new THREE.MeshStandardMaterial({color:hex,roughness:.62,metalness});
 const stone=mat('#354b5b'),gold=mat('#b99562',.42),cyan=mat('#47d8d2',.3),glass=new THREE.MeshStandardMaterial({color:'#6dd9d7',transparent:true,opacity:.25,roughness:.15,metalness:.2}),plant=mat('#32786b');
 const animated=[];
 function block(name,x,y,z,w,h,d,m){
  const mesh=new THREE.Mesh(new THREE.BoxGeometry(w,h,d),m);
  mesh.name=name;mesh.position.set(x,y,z);mesh.receiveShadow=true;scene.add(mesh);return mesh;
 }
 function sphere(name,x,y,z,r,m){
  const mesh=new THREE.Mesh(new THREE.SphereGeometry(r,16,12),m);
  mesh.name=name;mesh.position.set(x,y,z);scene.add(mesh);return mesh;
 }
 // Architektur: mathematische Galerie mit Torbögen, Nischen und schwebenden Symbolen.
 for(let side of [-1,1]){
  for(let depth of [-5,-1,3]){
   block('Galerie-Säule',side*5.8,2.3,depth,.45,4.6,.45,stone);
   block('Galerie-Kapitell',side*5.8,4.7,depth,.9,.22,.9,gold);
   sphere('Leuchtender Wissenspunkt',side*5.7,3.3,depth,.17,cyan);
  }
  block('Galerie-Brüstung',side*5.2,.7,-2,.24,1.4,11,stone);
 }
 // Raumtiefe und wechselnde Lichtpunkte
 for(let i=0;i<9;i++){
  const a=i*Math.PI*2/9;
  const obj=sphere('Schwebender Geometriekristall',Math.cos(a)*3.8,3.5+Math.sin(i)*.35,-3.4+Math.sin(a)*1.2,.12,i%3?gold:cyan);
  animated.push({obj,base:obj.position.y,phase:i*.83});
 }
 // Nächster Themenraum als sichtbares Ziel: Körperwerkstatt hinter dem Portal.
 block('Körperwerkstatt-Sockel',0,.25,-8.3,3,.5,2.5,stone);
 const cubes=[];
 for(let x=0;x<3;x++)for(let y=0;y<2;y++)for(let z=0;z<2;z++){
  const cube=block('Einheitswürfel-Körperwerkstatt',x*.48-.48,.73+y*.48,-8.5+z*.48,.45,.45,.45,(x+y+z)%2?glass:gold);
  cubes.push(cube);
 }
 // Lichtakzent als klarer Hinweis auf den mathematischen Zielraum.
 const light=new THREE.PointLight(0x60ded6,13,8);light.position.set(0,3,-7.8);scene.add(light);
 let current=0;
 return {
  setProgress(index){
   current=index;
   cubes.forEach((cube,i)=>{cube.visible=i<Math.min(12,4+(index+1)*3)});
  },
  update(time,reducedMotion=false){
   if(reducedMotion)return;
   animated.forEach(({obj,base,phase})=>{
    obj.position.y=base+Math.sin(time*.9+phase)*.11;
    obj.rotation.y=time*.4+phase;
   });
   light.intensity=12+Math.sin(time*.8)*2;
  }
 };
}
