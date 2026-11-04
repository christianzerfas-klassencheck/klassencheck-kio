// KlassenCheck: deterministische Diagnoseaufgaben Klasse 6 (Niedersachsen-Zuordnung noch zu prüfen).
// Framework-unabhängig, ohne externe Pakete. Integration in die Spielwelt folgt.
export const missions = Object.freeze([
  {id:"F01-01",world:"garten-der-anteile",competence:"F01",kind:"fraction-equivalence",prompt:"Welche Darstellung zeigt denselben Anteil wie 1/2?",given:[1,2],options:[[2,4],[2,3],[3,5]],correct:0,feedback:{wrong:"Teile beide Flächen in gleich große Stücke. Bleibt die gefärbte Fläche gleich?",right:"Genau: 1/2 und 2/4 zeigen denselben Anteil."},transfer:"F01-02"},
  {id:"F01-02",world:"garten-der-anteile",competence:"F01",kind:"fraction-equivalence",prompt:"Welche Darstellung ist gleich groß wie 2/3?",given:[2,3],options:[[4,6],[3,6],[4,9]],correct:0,feedback:{wrong:"Verdopple Zähler und Nenner gemeinsam.",right:"Richtig: 2/3 = 4/6."},transfer:null},
  {id:"F04-01",world:"energiebruecke",competence:"F04",kind:"fraction-comparison",prompt:"Welcher Anteil ist größer: 3/4 oder 2/3?",given:[[3,4],[2,3]],options:["links","gleich","rechts"],correct:0,feedback:{wrong:"Vergleiche Zwölftel: 3/4 = 9/12 und 2/3 = 8/12.",right:"Richtig: 3/4 ist größer."},transfer:"F04-02"},
  {id:"F04-02",world:"energiebruecke",competence:"F04",kind:"fraction-comparison",prompt:"Welcher Anteil ist größer: 3/5 oder 5/8?",given:[[3,5],[5,8]],options:["links","gleich","rechts"],correct:2,feedback:{wrong:"Vergleiche Vierzigstel: 3/5 = 24/40 und 5/8 = 25/40.",right:"Richtig: 5/8 ist größer."},transfer:null},
  {id:"G01-01",world:"koerperwerkstatt",competence:"G01",kind:"unit-cube-volume",prompt:"Ein Quader besteht aus 3 × 2 × 2 Einheitswürfeln. Wie viele sind es?",given:[3,2,2],options:[6,12,14],correct:1,feedback:{wrong:"Zähle zuerst die Würfel einer Schicht und dann alle Schichten.",right:"Richtig: 3 · 2 · 2 = 12 Einheitswürfel."},transfer:"G01-02"},
  {id:"G01-02",world:"koerperwerkstatt",competence:"G01",kind:"unit-cube-volume",prompt:"Ein Quader besteht aus 4 × 2 × 3 Einheitswürfeln. Wie viele sind es?",given:[4,2,3],options:[24,18,9],correct:0,feedback:{wrong:"Multipliziere Länge, Breite und Höhe.",right:"Richtig: 4 · 2 · 3 = 24 Einheitswürfel."},transfer:null}
]);
export function equivalent(a,b) {
  if(!Array.isArray(a)||!Array.isArray(b)||a.length!==2||b.length!==2||![...a,...b].every(Number.isSafeInteger)||a[1]<=0||b[1]<=0) return false;
  return BigInt(a[0])*BigInt(b[1])===BigInt(b[0])*BigInt(a[1]);
}
export function compareFractions(a,b) {
  if(!Array.isArray(a)||!Array.isArray(b)||a.length!==2||b.length!==2||![...a,...b].every(Number.isSafeInteger)||a[1]<=0||b[1]<=0) throw new RangeError("Ungültiger Bruch");
  const x=BigInt(a[0])*BigInt(b[1]),y=BigInt(b[0])*BigInt(a[1]);
  return x<y?-1:x>y?1:0;
}
export function evaluateMission(id,choiceIndex) {
  const mission=missions.find(m=>m.id===id);
  if(!mission) throw new RangeError("Unbekannte Mission");
  if(!Number.isInteger(choiceIndex)||choiceIndex<0||choiceIndex>=mission.options.length) return {correct:false,kind:"no-choice",feedback:"Bitte wähle eine Antwort."};
  const correct=choiceIndex===mission.correct;
  return {correct,kind:correct?"correct":"retry",feedback:correct?mission.feedback.right:mission.feedback.wrong,nextId:correct?mission.transfer:null};
}
