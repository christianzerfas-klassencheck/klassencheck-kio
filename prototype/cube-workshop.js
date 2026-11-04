/* KlassenCheck: interaktive Würfelwerkstatt, ohne zusätzliche Bibliotheken.
 * Lädt nach dem vorhandenen Prototyp-Skript und erweitert dessen render().
 */
(function(){
  const originalRender=render;
  render=function(){
    originalRender();
    if(category!=="cube")return;
    const task=tasks.cube[i];
    const group=document.querySelector("#scene .cubes");
    if(!group)return;
    let built=0;
    const controls=document.createElement("div");
    controls.className="workshop-controls";
    controls.style.cssText="display:flex;align-items:center;justify-content:center;flex-wrap:wrap;gap:12px;width:100%;margin-top:18px";
    const count=document.createElement("output");
    count.setAttribute("aria-live","polite");
    count.style.cssText="min-width:130px;text-align:center;color:#f5e3c6";
    const blocks=Array.from(group.children);
    function update(value){
      built=Math.max(0,Math.min(task.count,value));
      blocks.forEach((block,index)=>{
        block.style.opacity=index<built?"1":".15";
        block.style.transform=index<built?"translateY(-3px) skewY(-8deg)":"skewY(-8deg)";
      });
      count.textContent=built+" von "+task.count+" Würfeln";
    }
    function button(label,delta){
      const element=document.createElement("button");
      element.textContent=label;
      element.setAttribute("aria-label",delta>0?"Einheitswürfel hinzufügen":"Einheitswürfel entfernen");
      element.addEventListener("click",()=>update(built+delta));
      return element;
    }
    controls.append(button("−",-1),count,button("+",1));
    group.after(controls);
    update(0);
  };
})();
