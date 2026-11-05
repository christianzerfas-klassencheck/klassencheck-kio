import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.169.0/build/three.module.js';
export function mountProportionsWorld(host){
 const scene=new THREE.Scene();scene.background=new THREE.Color('#102a46');scene.fog=new THREE.FogExp2('#102a46',.018);
 const camera=new THREE.PerspectiveCamera(48,1,.1,300);camera.position.set(22,17,30);camera.lookAt(0,1,0);
 const renderer=new THREE.WebGLRenderer({antialias:true,alpha:false,powerPreference:'low-power'});renderer.setPixelRatio(Math.min(devicePixelRatio||1,1.7));renderer.outputColorSpace=THREE.SRGBColorSpace;renderer.toneMapping=THREE.ACESFilmicToneMapping;renderer.toneMappingExposure=1.45;renderer.shadowMap.enabled=true;renderer.shadowMap.type=THREE.PCFSoftShadowMap;host.append(renderer.domElement);
 scene.add(new THREE.HemisphereLight('#b7e5ff','#12263e',2.2));
 const sun=new THREE.DirectionalLight('#ffe4b5',3);sun.position.set(-12,24,10);sun.castShadow=true;sun.shadow.mapSize.set(1024,1024);sun.shadow.camera.left=-40;sun.shadow.camera.right=40;sun.shadow.camera.top=40;sun.shadow.camera.bottom=-40;scene.add(sun);
 const mat=(color,metalness=0,roughness=.6,emissive)=>new THREE.MeshStandardMaterial({color,metalness,roughness,emissive:emissive||'#000000',emissiveIntensity:emissive ? 0.65 : 0});
 const stone=mat('#29495b',.18),gold=mat('#e4b77c',.65,.3),water=mat('#153d58',.45,.22),glass=mat('#55c9c8',.35,.17,'#187f91'),dark=mat('#152d45',.35);
 const box=(w,h,d,m,x,y,z,parent=scene)=>{const mesh=new THREE.Mesh(new THREE.BoxGeometry(w,h,d),m);mesh.position.set(x,y,z);mesh.castShadow=true;mesh.receiveShadow=true;parent.add(mesh);return mesh};
 box(170,.3,150,water,0,-1.4,0);
 for(let side of [-1,1]){box(16,2,50,stone,side*21,-.5,0);for(let i=-3;i<=3;i++){const x=side*(17+(i%2)*2),z=i*7;const height=7+(Math.abs(i*11)%9);box(3.2,height,3.2,dark,x,height/2,z);box(3.4,.25,3.4,glass,x,height+.1,z)}}
 const bridge=new THREE.Group();scene.add(bridge);
 function rebuild(count){for(const child of [...bridge.children]){bridge.remove(child);if(child.isMesh)child.geometry.dispose();if(child.isLight)child.dispose?.()}const n=Math.max(0,Math.min(10,count));for(let i=0;i<n;i++){const x=(i-(n-1)/2)*2.35;box(2.18,.6,4.4,gold,x,2,0,bridge);box(.23,3,.23,stone,x-.8,.5,-1.6,bridge);box(.23,3,.23,stone,x+.8,.5,1.6,bridge);box(2.12,.11,.14,glass,x,2.4,-2.05,bridge);box(2.12,.11,.14,glass,x,2.4,2.05,bridge);const lamp=new THREE.PointLight('#52fff2',.8,6);lamp.position.set(x,3,0);bridge.add(lamp)}}
 let count=3;rebuild(count);
 const observe=new MutationObserver(()=>{const text=document.getElementById('counter')?.textContent||'';const next=Number(text.match(/\d+/)?.[0]);if(Number.isFinite(next)&&next!==count){count=next;rebuild(count)}});observe.observe(document.getElementById('counter'),{childList:true,characterData:true,subtree:true});
 let frame=0,raf=0,visible=true;const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
 function resize(){const w=host.clientWidth,h=host.clientHeight;if(!w||!h)return;camera.aspect=w/h;camera.updateProjectionMatrix();renderer.setSize(w,h,false)}const ro=new ResizeObserver(resize);ro.observe(host);resize();
 const tick=()=>{raf=requestAnimationFrame(tick);if(!visible)return;frame++;if(!reduced){camera.position.x=22+Math.sin(frame*.0018)*3;camera.lookAt(0,1,0)}renderer.render(scene,camera)};tick();
 const io=new IntersectionObserver(entries=>{visible=entries[0]?.isIntersecting??true});io.observe(host);
 return ()=>{cancelAnimationFrame(raf);ro.disconnect();io.disconnect();observe.disconnect();rebuild(0);scene.traverse(obj=>{if(obj.isMesh)obj.geometry.dispose()});for(const material of [stone,gold,water,glass,dark])material.dispose();renderer.dispose();host.replaceChildren()};
}
