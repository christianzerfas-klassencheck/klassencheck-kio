/* Kontextbezogene Lernbegleitung für den Diagnoselabor-Prototyp.
 * Diese Text-/UI-Version ist kein Ersatz für den vorhandenen 3D-Kio.
 */
(function(){
  const originalRender=render, originalCheck=check, originalHint=showHint;
  let tries=0;
  function say(message){
    let panel=document.getElementById("kio-guide");
    if(!panel){
      panel=document.createElement("div");
      panel.id="kio-guide";
      panel.setAttribute("role","status");
      panel.setAttribute("aria-live","polite");
      panel.style.cssText="border:1px solid #688d8d;background:#214249;border-radius:16px;padding:15px 18px;margin:16px 0;color:#f5e8d6;line-height:1.5";
      const scene=document.getElementById("scene");
      scene.before(panel);
    }
    panel.textContent="Kio: "+message;
  }
  render=function(){
    originalRender();
    tries=0;
    say(category==="cube"
      ?"Baue zuerst einen Körper aus Einheitswürfeln. Wie viele Würfel sind insgesamt nötig?"
      :"Verändere die markierten Felder. Vergleiche dann die Anteile.");
  };
  check=function(){
    const answer=selected;
    originalCheck();
    if(answer<0){say("Wähle eine Antwort, bevor du prüfst.");return;}
    if(done){
      say(usedHint?"Gut gelöst! Mit einem Hinweis hast du den Weg gefunden.":"Richtig! Du kannst die Idee jetzt auf eine neue Aufgabe übertragen.");
    }else{
      tries++;
      say(tries===1?"Noch nicht richtig. Probiere eine andere Darstellung aus.":"Vergleiche die Einheiten sorgfältig. Ein Hinweis kann helfen.");
    }
  };
  showHint=function(){
    originalHint();
    say("Ich gebe dir einen Tipp: "+tasks[category][i].hint);
  };
})();
