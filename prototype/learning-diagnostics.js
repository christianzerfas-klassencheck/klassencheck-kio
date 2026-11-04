/* KlassenCheck: nachvollziehbare Lernstandsdiagnose im lokalen Prototyp.
 * Keine Serverkommunikation, keine personenbezogenen Daten.
 */
(function(){
  const key="klassencheck-alpha-diagnose-v1";
  let attempts=[];
  try{const saved=JSON.parse(localStorage.getItem(key)||"[]");if(Array.isArray(saved))attempts=saved.slice(-100)}catch{}
  const originalCheck=check;
  const originalRender=render;
  const labels={
    "F01-01":"Gleichwertige Brüche",
    "F04-01":"Brüche vergleichen",
    "F04-02":"Brüche vergleichen – Transfer",
    "G01-01":"Volumen mit Einheitswürfeln",
    "G01-02":"Volumen mit Einheitswürfeln",
    "G01-03":"Volumen – Transfer"
  };
  function save(){try{localStorage.setItem(key,JSON.stringify(attempts.slice(-100)))}catch{}}
  function summary(){
    const panel=document.getElementById("learning-summary");
    if(!panel)return;
    const group=attempts.filter(a=>a.category===category);
    const solved=new Set(group.filter(a=>a.correct).map(a=>a.id));
    const errors=group.filter(a=>!a.correct).length;
    panel.textContent="Dein Lernweg: "+solved.size+" von 3 Missionen gelöst · "+errors+" weitere Versuche. Deine Daten bleiben auf diesem Gerät.";
  }
  render=function(){originalRender();summary()};
  check=function(){
    const task=tasks[category][i];
    const choice=selected;
    const wasDone=done;
    originalCheck();
    if(choice<0||wasDone)return;
    attempts.push({id:task.id,category,competence:labels[task.id]||task.id,correct:choice===task.answer,usedHint:!!usedHint});
    attempts=attempts.slice(-100);
    save();
    summary();
  };
  const panel=document.createElement("p");
  panel.id="learning-summary";
  panel.className="muted";
  panel.setAttribute("aria-live","polite");
  const game=document.getElementById("game");
  game.append(panel);
})();
