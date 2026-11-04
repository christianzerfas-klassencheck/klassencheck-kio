# Kio 2.0 – Produktionsbrief für eigenständigen 3D-Charakter

## Entscheidung
Das prozedurale Three.js-Modell in `index.html` bleibt eine **technische Übergangslösung**. Es wird **nicht** zum finalen Charaktermodell ausgebaut. Ziel ist ein originärer, professionell riggbarer, performanter menschlicher Game-Charakter, der in WebGL auf Mobilgeräten funktioniert.

## Stil
- Glaubwürdige, eigenständige jugendliche Entdeckerfigur, **kein Nachbau** von Fortnite-, GTA-, Roblox- oder anderen geschützten Figuren.
- Ausdrucksstarkes Gesicht, klare Silhouette, moderne funktionale Kleidung, hochwertige Materialien, dezente gold-/petrolfarbene Markenakzente.
- Hände anatomisch nachvollziehbar; neutraler Stand ohne unnatürliche V-Arme; natürliche Gewichtsverlagerung.
- Nahaufnahme (Gesicht), Halbfigur (Erklärung), Ganzkörper (Navigation) als gleichwertige Abnahmeperspektiven.

## Technische Asset-Spezifikation
- Austauschformat: glTF 2.0 / GLB; PBR-Materialien; riggbarer Mesh-Aufbau.
- Einheitliche Skelett-Hierarchie, dokumentierte Bone-Namen und Animation-Clips.
- Ziel-Budget **vorläufig**: möglichst unter 35.000 Dreiecke, 1–2 komprimierte Textur-Atlanten; tatsächliche Grenzwerte erst nach Gerätemessung festlegen.
- LOD/Qualitätsstufen für Mobilgeräte; Texturen nur mit dokumentierter Lizenz.
- Animationen: idle, turn-left/right, walk, point-to-object, explain, nod, celebrate, listen, recover.
- Gesicht: Blinzeln, Augenrichtung, Brauen, Mundformen/Viseme; synchronisierbar mit optionalem Audio.
- Zustandsmaschine mit weichen Übergängen und Abbruchfähigkeit; keine endlosen mechanischen Arm-Loops.
- Bei `prefers-reduced-motion`: reduzierte Gesten und Kamerabewegung.

## Realisierungsweg ohne kostenpflichtige Credits
1. Eigenständiges Modell/Grundmesh in Blender erstellen oder ein **ausdrücklich kommerziell nutzbares** Basismodell nach Lizenzprüfung adaptieren.
2. Rigging und Animationen in Blender, Export als GLB. Keine Fremdassets ohne dokumentierte Quelle/Lizenz übernehmen.
3. Three.js GLTFLoader und AnimationMixer für Laufzeit, Blicksteuerung und State Machine.
4. Kio-Reaktionen an deterministische Lernereignisse koppeln (nicht an bloße Button-Klicks).
5. iPhone-/Android-Abnahme mit Screenshot/Video, Performance und Feedback; erst danach Ersatz des alten Modells.

## Verbindliche Prüfszenen
A: Kio steht neutral, schaut in die Kamera, dreht 90° nach links/rechts.
B: Kio geht drei Schritte, stoppt ohne Kippen und zeigt auf ein Bruchobjekt.
C: Kio erklärt eine Fehlstrategie, reagiert auf Erfolg, wechselt zurück zu idle.
D: Audio aus / Untertitel an / reduzierte Bewegung.

## Aktueller Befund
- Die vorhandene `index.html` erzeugt Körperteile aus Boxen und Kugeln; sie enthält **kein professionelles Rig, keine Gesichtsanimation und kein GLB-Modell**.
- Der heutige Commit mit Material-/Gesichtsdetails verbessert das Übergangsmodell, erfüllt die oben genannten Kriterien aber **nicht**.
- Ein finaler Kio-GLB-Asset ist im aktuellen Arbeitsschritt **nicht produziert**. Ohne Asset kann keine glaubwürdige 3D-Figur als fertig bezeichnet werden.
