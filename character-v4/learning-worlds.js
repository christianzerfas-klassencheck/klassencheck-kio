import * as T from'three';
export function buildLearningWorlds(scene){
 const root=new T.Group();root.name='LearningWorlds';scene.add(root);const worlds=[],names=['Observatorium','Dachgarten','Energiekammer'];let selected=0,time=0;
 const material=(color,metalness=0,roughness=.7)=>new T.MeshStandardMaterial({color,metalness,roughness});
 const pale=material('#d4d8d2'),ink=material('#1d303c',.25),metal=material('#627f87',.5,.35),wood=material('#947a60');
 const glow=color=>new T.MeshStandardMaterial({color,emissive:color,emissiveIntensity:1.5,roughness:.4});const cyan=glow('#66c9cf'),amber=glow('#eda578');
 function mesh(g,m,parent,x=0,y=0,z=0){const o=new T.Mesh(g,m);o.position.set(x,y,z);o.castShadow=o.receiveShadow=true;parent.add(o);return o}
 const box=(p,w,h,d,x,y,z,m)=>mesh(new T.BoxGeometry(w,h,d),m,p,x,y,z);
 const tube=(p,points,r,m)=>mesh(new T.TubeGeometry(new T.CatmullRomCurve3(points.map(a=>new T.Vector3(...a))),64,r,8,false),m,p);
 // Common mission area is preserved when the surrounding architecture changes.
 mesh(new T.CylinderGeometry(5.9,6.1,.2,96),ink,root,0,-.14,-1.4);
 const platform=mesh(new T.CylinderGeometry(2.5,2.6,.07,80),pale,root,0,-.025,-.6);platform.receiveShadow=true;
 const rim=mesh(new T.TorusGeometry(2.5,.012,8,96),cyan,root,0,.02,-.6);rim.rotation.x=Math.PI/2;
 box(root,2.15,.12,1.12,1.4,.91,-1.75,ink);box(root,1.95,.012,.94,1.4,.978,-1.75,metal);
 box(root,.75,.86,.55,1.4,.41,-1.75,ink);box(root,.012,.6,.56,1.78,.48,-1.75,cyan);
 for(let i=0;i<6;i++)box(root,.11,.006,.028,-.4+i*.24,.02,-.6-i*.11,amber);
 const observatory=new T.Group();root.add(observatory);worlds.push(observatory);
 for(let i=0;i<9;i++){const a=Math.PI*.12+i/8*Math.PI*.8,x=5.3*Math.cos(a),z=-1.4-5.3*Math.sin(a);box(observatory,.09,4.7,.12,x,2.15,z,metal);const b=a+.1;const panel=box(observatory,1.65,3.9,.035,5.35*Math.cos(b),2.2,-1.4-5.35*Math.sin(b),new T.MeshPhysicalMaterial({color:'#7595a6',transparent:true,opacity:.13,roughness:.15,depthWrite:false,side:T.DoubleSide}));panel.castShadow=false;panel.rotation.y=-b-Math.PI/2}
 for(const height of[.28,4.1])tube(observatory,Array.from({length:33},(_,i)=>{const a=.1*Math.PI+i/32*.8*Math.PI;return[5.3*Math.cos(a),height,-1.4-5.3*Math.sin(a)]}),.045,metal);
 for(let i=0;i<7;i++)box(observatory,.065,.09,5.7,-3+i*.8,4.05,-2.6,i%2?ink:cyan);
 const planet=mesh(new T.SphereGeometry(1.15,48,32),material('#567c9a',.1,.8),observatory,-3.6,3.1,-9);const orbit=mesh(new T.TorusGeometry(1.7,.025,8,96),amber,observatory,-3.6,3.1,-9);orbit.rotation.x=1.1;orbit.rotation.y=.35;
 const stars=new T.BufferGeometry();stars.setAttribute('position',new T.Float32BufferAttribute(Array.from({length:180},(_,i)=>[Math.sin(i*127.1)*11,1.5+(Math.sin(i*53.3)+1)*3,-8-Math.abs(Math.cos(i*31.7))*6]).flat(),3));observatory.add(new T.Points(stars,new T.PointsMaterial({color:'#b9d9e7',size:.025,sizeAttenuation:true})));
 const garden=new T.Group();root.add(garden);worlds.push(garden);
 box(garden,10,.35,1.1,0,.12,-4.9,pale);box(garden,10,.03,.08,0,1.4,-5,metal);for(let i=0;i<9;i++)box(garden,.035,1.3,.035,-4+i, .7,-5,metal);
 for(const x of[-3.4,3.6]){box(garden,1.2,.5,2.5,x,.25,-2.9,wood);for(let i=0;i<7;i++){const px=x+Math.sin(i*3)*.34,z=-3.8+i*.3;mesh(new T.CylinderGeometry(.025,.04,1.2,8),wood,garden,px,1.05,z);const leaf=mesh(new T.IcosahedronGeometry(.45,2),material(i%2?'#477d69':'#7c9c71'),garden,px,1.65+(i%3)*.13,z);leaf.scale.set(.65,1.5,.65)}}
 for(let i=0;i<15;i++){const h=.7+(Math.sin(i*12)+1)*1.3;box(garden,.6,h,.8,-7+i, h/2,-9,material(i%2?'#869a9e':'#566f7c'))}
 for(const x of[-3.4,3.4])box(garden,.11,4,.11,x,1.9,-3.6,pale);for(let i=0;i<10;i++)box(garden,7,.07,.12,0,3.85,-4.6+i*.4,wood);
 const energy=new T.Group();root.add(energy);worlds.push(energy);const rings=[];
 for(let i=0;i<3;i++){const r=mesh(new T.TorusGeometry(1.3+i*.25,.065,12,80),i===1?amber:metal,energy,0,2.1,-4-i*.3);r.rotation.y=i*.16;rings.push(r)}
 for(const x of[-3.5,3.5]){box(energy,.8,3.7,.9,x,1.7,-3.8,ink);box(energy,.055,2.8,.06,x,1.8,-3.3,cyan)}
 const core=mesh(new T.IcosahedronGeometry(.43,2),cyan,energy,0,2.1,-4.3);const energyLight=new T.PointLight('#61cadb',3,9);energyLight.position.set(0,2.1,-3);energy.add(energyLight);
 const palettes=[['#0d1d30','#d1e0e5'],['#6d929a','#e5eedf'],['#111b2b','#bacfdc']];
 function choose(i){selected=((i%worlds.length)+worlds.length)%worlds.length;worlds.forEach((w,k)=>w.visible=k===selected);scene.background=new T.Color(palettes[selected][0]);scene.fog=new T.Fog(palettes[selected][0],12,25);return names[selected]}
 choose(0);
 return{next(){return choose(selected+1)},get name(){return names[selected]},update(dt,{reduced=false,completed=false}={}){time+=Math.min(.05,Math.max(0,dt));if(!reduced&&selected===2){core.rotation.y=time*.18;rings[1].rotation.z=time*.08}energyLight.intensity=completed?5:3;rim.material.emissiveIntensity=completed?2:1.3;},root};
}
