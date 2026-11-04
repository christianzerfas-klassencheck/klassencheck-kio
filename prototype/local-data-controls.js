/* Datenkontrolle für den lokalen KlassenCheck-Alpha-Prototyp. */
(function(){
  const home=document.getElementById("home");
  if(!home)return;
  const area=document.createElement("section");
  area.style.cssText="margin-top:34px;padding:18px;border:1px solid #55727b;border-radius:16px;background:#18343b";
  const heading=document.createElement("h2");
  heading.textContent="Deine Lerndaten";
  heading.style.fontSize="23px";
  const info=document.createElement("p");
  info.className="muted";
  info.textContent="Dieser Prototyp speichert Aufgabenfortschritt und Versuche ausschließlich in diesem Browser. Es wird kein Benutzerkonto benötigt.";
  const reset=document.createElement("button");
  reset.className="back";
  reset.textContent="Lokalen Lernfortschritt löschen";
  const status=document.createElement("p");
  status.setAttribute("role","status");
  status.setAttribute("aria-live","polite");
  reset.addEventListener("click",()=>{
    if(!confirm("Den lokal gespeicherten KlassenCheck-Lernfortschritt auf diesem Gerät löschen?"))return;
    try{
      ["klassencheck-alpha-diagnose-v1","kc-demo-fraction","kc-demo-cube"].forEach(key=>localStorage.removeItem(key));
      status.textContent="Der lokale Lernfortschritt wurde gelöscht. Für eine neue Diagnose lade die Seite neu.";
    }catch{status.textContent="Löschen nicht möglich. Bitte überprüfe die Browsereinstellungen."}
  });
  area.append(heading,info,reset,status);
  home.append(area);
})();
