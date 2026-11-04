// Fachlich zu prüfender Inhaltskatalog. Schulform-/Niveauzuordnung NICHT amtlich bestätigt.
export const worlds=Object.freeze([
 {grade:5,id:"zahlenhafen",title:"Zahlenhafen",concept:"Stellenwert und Rechnen",interaction:"Zahlenblöcke in Stellenwertschleusen verschieben",diagnostic:"Stellenwertverwechslung"},
 {grade:5,id:"formenatelier",title:"Formenatelier",concept:"Formen, Umfang und Flächenvorstellung",interaction:"Kanten und Flächen eines Bauplans verändern",diagnostic:"Umfang mit Flächeninhalt verwechselt"},
 {grade:6,id:"bruchbruecke",title:"Bruchbrücke",concept:"Brüche vergleichen und erweitern",interaction:"Bruchstreifen verändern",diagnostic:"Nenner als Größenindikator missverstanden"},
 {grade:6,id:"koerperwerkstatt",title:"Körperwerkstatt",concept:"Würfel, Quader und Volumen",interaction:"Einheitswürfel zu Körpern zusammensetzen",diagnostic:"Nur eine Schicht gezählt"},
 {grade:7,id:"proportionsstadt",title:"Proportionsstadt",concept:"Zuordnungen und Prozentvorstellungen",interaction:"Materialmengen proportional skalieren",diagnostic:"Additive statt proportionale Rechnung"},
 {grade:7,id:"gleichungsportal",title:"Gleichungsportal",concept:"Terme und Gleichungen",interaction:"Gleichgewichtswaage manipulieren",diagnostic:"Einseitige Umformung"},
 {grade:8,id:"koordinatenlabor",title:"Koordinatenlabor",concept:"Lineare Zusammenhänge",interaction:"Punkte und Geraden im Raum verschieben",diagnostic:"Steigung und Achsenabschnitt verwechselt"},
 {grade:8,id:"datenstation",title:"Datenstation",concept:"Daten und Wahrscheinlichkeiten",interaction:"Messwerte zu Diagrammen zusammenfügen",diagnostic:"Absolute und relative Häufigkeit verwechselt"},
 {grade:9,id:"energiearchitektur",title:"Energiearchitektur",concept:"Prozent- und Zinsmodelle",interaction:"Verbrauchsszenarien verändern",diagnostic:"Grundwert und Prozentwert verwechselt"},
 {grade:9,id:"dreiecksobservatorium",title:"Dreiecksobservatorium",concept:"Geometrische Beziehungen",interaction:"Messdreiecke konstruieren",diagnostic:"Ungeeignete Beziehung gewählt"},
 {grade:10,id:"funktionswerk",title:"Funktionswerk",concept:"Funktionale Modelle",interaction:"Parameter einer Modellmaschine verändern",diagnostic:"Parameterwirkung falsch interpretiert"},
 {grade:10,id:"entscheidungszentrum",title:"Entscheidungszentrum",concept:"Daten und Modellieren",interaction:"Hypothesen anhand von Daten prüfen",diagnostic:"Korrelation mit Ursache verwechselt"}
]);
export const volumeTasks=Object.freeze([
 {id:"G01-A",dimensions:[2,2,2],answer:8,hint:"Zähle vier Würfel je Schicht und zwei Schichten."},
 {id:"G01-B",dimensions:[3,2,2],answer:12,hint:"Drei mal zwei Würfel je Schicht, zwei Schichten."},
 {id:"G01-C",dimensions:[4,2,3],answer:24,hint:"Vier mal zwei Würfel je Schicht, drei Schichten."}
]);
export function evaluateVolume(dimensions,answer){
 if(!Array.isArray(dimensions)||dimensions.length!==3||dimensions.some(x=>!Number.isSafeInteger(x)||x<1))throw new RangeError("Ungültige Körpermaße");
 const expected=dimensions.reduce((a,b)=>a*b,1);
 return {correct:Number.isSafeInteger(answer)&&answer===expected,expected};
}
