import * as T from'three';
// Soft illustrative shading over the existing real-time geometry.
export const ART_DIRECTION={ink:'#362b32',shadow:'#6d607c',cream:'#eee0c8',coral:'#d89471',teal:'#527c79'};
export function shadeIllustration(shader){
 shader.fragmentShader=shader.fragmentShader.replace('#include <opaque_fragment>',`
 // Preserve lighting and shadows, gently compress values into painted tones.
 float paintedLuma=max(dot(outgoingLight,vec3(.2126,.7152,.0722)),.0001);
 float paintedBand=floor(paintedLuma*8.0+.5)/8.0;
 outgoingLight*=mix(1.0,paintedBand/paintedLuma,.22);
 float paintedEdge=1.0-abs(dot(normal,normalize(vViewPosition)));
 outgoingLight*=1.0-.18*smoothstep(.6,.96,paintedEdge);
 outgoingLight+=vec3(.018,.009,.004)*(1.0-smoothstep(.15,.7,paintedLuma));
 #include <opaque_fragment>`);
}
export function applyIllustratedStyle(scene,actor){
 const materials=new WeakSet(),edges=[],shells=[];
 const originals=[];scene.traverse(o=>{if(o.isMesh)originals.push(o)});
 for(const mesh of originals){for(const material of(Array.isArray(mesh.material)?mesh.material:[mesh.material])){
  if(!material.isMeshStandardMaterial||materials.has(material))continue;materials.add(material);
  material.metalness=Math.min(material.metalness,.16);material.roughness=Math.max(material.roughness,.62);
  const originalCompile=material.onBeforeCompile,originalKey=material.customProgramCacheKey.bind(material);
  material.onBeforeCompile=function(shader,renderer){originalCompile.call(this,shader,renderer);shadeIllustration(shader)};
  const key=originalKey();material.customProgramCacheKey=()=>key+'-painted-v13';material.needsUpdate=true;
 }
 // Architecture receives fine ink joins. Transparent windows, small details and plants stay clear.
 if(!mesh.isSkinnedMesh&&!actor.scene.getObjectById(mesh.id)&&mesh.geometry.type==='BoxGeometry'&&!mesh.material.transparent&&edges.length<80){
  mesh.geometry.computeBoundingSphere();if(mesh.geometry.boundingSphere.radius>.18){const lines=new T.LineSegments(new T.EdgesGeometry(mesh.geometry,35),new T.LineBasicMaterial({color:ART_DIRECTION.ink,transparent:true,opacity:.3,depthWrite:false}));lines.name='IllustratedArchitecturalEdge';mesh.add(lines);edges.push(lines)}
 }
 }
 for(const name of['KioFaceSurface','Kio_jacket']){
  const source=actor.scene.getObjectByName(name),width=name==='KioFaceSurface'?.0012:.0025;
  const material=new T.MeshBasicMaterial({color:ART_DIRECTION.ink,side:T.BackSide,transparent:source.material.transparent,alphaTest:source.material.alphaTest,depthWrite:true});
  material.onBeforeCompile=shader=>{if(name==='Kio_jacket'){
   shader.vertexShader='varying float outlineHeight;\n'+shader.vertexShader;
   shader.vertexShader=shader.vertexShader.replace('#include <skinning_vertex>','#include <skinning_vertex>\noutlineHeight=transformed.y;');
   shader.fragmentShader='varying float outlineHeight;\n'+shader.fragmentShader;
   shader.fragmentShader=shader.fragmentShader.replace('#include <alphatest_fragment>','diffuseColor.a *= smoothstep(.985,1.12,outlineHeight);\n#include <alphatest_fragment>');
  }shader.vertexShader=shader.vertexShader.replace('#include <begin_vertex>',`#include <begin_vertex>\ntransformed += normal * ${width.toFixed(5)};`)};
  material.customProgramCacheKey=()=> 'kio-contour-'+name+'-v13';
  const shell=source.isSkinnedMesh?new T.SkinnedMesh(source.geometry,material):new T.Mesh(source.geometry,material);
  shell.name=name+'InkContour';shell.position.copy(source.position);shell.quaternion.copy(source.quaternion);shell.scale.copy(source.scale);
  if(source.isSkinnedMesh)shell.bind(source.skeleton,source.bindMatrix);
  shell.morphTargetInfluences=source.morphTargetInfluences;shell.morphTargetDictionary=source.morphTargetDictionary;
  shell.castShadow=false;shell.frustumCulled=false;source.parent.add(shell);shells.push(shell);
 }
 return{edges,shells,dispose(){for(const line of edges){line.geometry.dispose();line.material.dispose();line.removeFromParent()}for(const shell of shells){shell.material.dispose();shell.removeFromParent()}}};
}
