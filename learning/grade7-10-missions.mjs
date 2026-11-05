// Pilotaufgaben für Jahrgänge 7–10. Didaktische Einordnung noch gegen das amtliche OBS-Kerncurriculum zu prüfen.
export const missions=[
 {id:"P7-01",grade:7,world:"Proportionsstadt",title:"Materiallieferung",question:"Für 3 Brückenfelder braucht Kio 12 Bausteine. Wie viele braucht er für 5 gleich große Felder?",answer:20,unit:"Bausteine",hint:"Berechne zuerst die Bausteine pro Feld: 12 : 3.",diagnostic:"Additiv statt proportional gerechnet",wrong:14,explain:"12 : 3 = 4 Bausteine je Feld. 5 × 4 = 20."},
 {id:"G7-01",grade:7,world:"Gleichungsportal",title:"Das Gegengewicht",question:"Eine Waage ist im Gleichgewicht: x + 7 = 19. Welches Gewicht hat x?",answer:12,unit:"",hint:"Ziehe auf beiden Seiten 7 ab.",diagnostic:"Einseitige Umformung",wrong:26,explain:"x = 19 − 7 = 12."},
 {id:"K8-01",grade:8,world:"Koordinatenlabor",title:"Steigung einstellen",question:"Eine Gerade verläuft durch (0|2) und (3|8). Wie groß ist ihre Steigung?",answer:2,unit:"",hint:"Teile die Änderung von y durch die Änderung von x.",diagnostic:"Steigung mit y-Wert verwechselt",wrong:8,explain:"(8 − 2) : (3 − 0) = 6 : 3 = 2."},
 {id:"D8-01",grade:8,world:"Datenstation",title:"Messwerte prüfen",question:"Von 40 Messungen sind 10 erfolgreich. Wie viel Prozent sind das?",answer:25,unit:"%",hint:"Berechne 10 : 40 und multipliziere mit 100.",diagnostic:"Absolute und relative Häufigkeit verwechselt",wrong:10,explain:"10 : 40 × 100 = 25 %."},
 {id:"E9-01",grade:9,world:"Energiearchitektur",title:"Energiespeicher",question:"Ein Speicher hat 240 Energieeinheiten. 15 % werden verbraucht. Wie viele Einheiten sind das?",answer:36,unit:"Einheiten",hint:"Berechne zuerst 10 % und dann 5 %.",diagnostic:"Grundwert und Prozentwert verwechselt",wrong:15,explain:"240 × 0,15 = 36."},
 {id:"T9-01",grade:9,world:"Dreiecksobservatorium",title:"Rechtwinkliges Dreieck",question:"Ein rechtwinkliges Dreieck hat Katheten 6 m und 8 m. Wie lang ist die Hypotenuse?",answer:10,unit:"m",hint:"Nutze a² + b² = c².",diagnostic:"Katheten addiert statt Satz des Pythagoras",wrong:14,explain:"6² + 8² = 100, also c = 10 m."},
 {id:"F10-01",grade:10,world:"Funktionswerk",title:"Parabelmaschine",question:"Für f(x) = x² − 4: Welchen Wert hat f(3)?",answer:5,unit:"",hint:"Setze 3 für x ein: 3² − 4.",diagnostic:"Quadrieren und Multiplizieren verwechselt",wrong:2,explain:"3² − 4 = 9 − 4 = 5."},
 {id:"S10-01",grade:10,world:"Entscheidungszentrum",title:"Daten interpretieren",question:"Eine Stichprobe umfasst 80 Teile, davon 12 fehlerhafte. Wie hoch ist der Fehleranteil in Prozent?",answer:15,unit:"%",hint:"Teile 12 durch 80 und multipliziere mit 100.",diagnostic:"Prozentbasis verwechselt",wrong:12,explain:"12 : 80 × 100 = 15 %."}
];
export function assess(mission,input){
 const value=typeof input==="string"&&input.trim()!==""?Number(input.replace(",",".")):input;
 if(!Number.isFinite(value))return {status:"invalid",feedback:"Bitte gib eine gültige Zahl ein."};
 if(value===mission.answer)return {status:"correct",feedback:mission.explain};
 if(value===mission.wrong)return {status:"misconception",feedback:"Kio erkennt einen möglichen Denkfehler: "+mission.diagnostic+". "+mission.hint};
 return {status:"retry",feedback:"Noch nicht richtig. "+mission.hint};
}
