# Kio · Charakterstudie 04

Die GitHub-Fassung ersetzt die bisherige Figur aus Grundkörpern durch die im KlassenCheck-Projekt erarbeitete anatomische Entwicklungsbasis B. Das ist ein Zwischenstand, keine Freigabe als fotorealistische oder fertige Produktionsfigur.

## Verhalten
- Bodenkontakt über Zweiknochen-Beinsteuerung und eine zur Strecke passende Schrittphase.
- Weiche Drehung, Beschleunigung und Abbremsung auf dem Weg zum Tisch.
- Begrüßung geht in eine ruhige, zugewandte Zuhörhaltung über.
- Geglättete Blickbewegung, dezentes Lächeln und zeitlich variierendes Blinzeln.
- Neu erzeugte deutsche M5-Aufnahme, alternativ eigene Aufnahmen aus dem Audioeditor; keine Gerätesprachsynthese.
- Vorbereitete Aufnahmen besitzen eine offline abgeleitete Lautspur. Mundformen, Gesten und Blinzelpunkte werden aus derselben tatsächlichen Abspielzeit gelesen. Rhubarb-Lautklassen und der grobe Gesichtsrig ergeben keine perfekte deutsche Artikulation.
- Die frühere Bruchmission bleibt unter ../?v=3 erhalten. Die Hauptlernwelt und ihre laufenden Tests werden hierdurch nicht verändert.

## Stimme
Die eigene Audioerzeugung wurde mit Supertonic 3 aufgebaut und drei deutsche Aufnahmen wurden tatsächlich erzeugt. Siehe AUDIO-STATUS.md. Die M5-Begrüßung ist als neue Teststimme eingebunden. Das ist keine fertige oder hörgeprüfte Charakterstimme; Qualität und Tonalität müssen weiterhin beurteilt werden.

## Abnahme
Automatisierte Prüfungen für Übergänge, Blickbewegung, Gangsteuerung und Rig vorhanden. Browser-, Hör- und Geräteabnahme dieser GitHub-Fassung fehlen. Die frühere automatische Browserfreigabe wurde wegen eines Nutzungslimits abgelehnt; keine Umgehung. Silhouette, Haut, Haare, Mundtopologie und Handgestik brauchen weitere künstlerische Beurteilung.

## Herkunft
Anatomische Basis: dokumentierte CC0-Derivate von MakeHuman; siehe assets/makehuman/PROVENANCE.md, BODY-NEXT-PROVENANCE.md und LICENSE.CC0.txt. Eigene Modellanpassung, Bekleidung, Charaktersteuerung und Szene aus dem KlassenCheck-Projekt. Three.js wird mit fest gepinnter Version 0.169.0 vom CDN geladen (MIT-Lizenz: https://github.com/mrdoob/three.js/blob/r169/LICENSE).

## Bewegungsrevision 05
M5 wurde vom Nutzer als Stimmfarbe bestätigt und bleibt unverändert. Die Gangsteuerung nutzt nun im Raum fixierte Standfüße, einzeln geplante Schritte mit weichem Anheben und Absetzen, leichtes Fußabrollen in der Schwungphase und eine zur Reichweite passende Kniebeugung. Beim Anhalten setzt Kio die Füße nacheinander zurück. Blick und Körper wenden sich zuerst dem Weg zu; die Fortbewegung beginnt erst nach der Drehung. Drehgeschwindigkeit ist begrenzt. Hüfte, Brustkorb, Arme, Ellenbogen und Handgelenke arbeiten zeitlich versetzt; der Armschwung folgt der tatsächlichen Ortsbewegung. Bei reduzierter Bewegung entfallen diese Zusatzbewegungen.

13 automatisierte Tests bestehen, darunter Standkontakt während Ortsbewegung, Stoppschritte, Drehbegrenzung sowie Rig-Prüfungen bei 30 und 60 Zeitschritten pro Sekunde und auf dem beschleunigten diagonalen Weg. Das belegt technische Eigenschaften, keine visuelle Freigabe als natürliches Schauspiel. Die Browser-Abnahme bleibt nach der früheren automatischen Ablehnung wegen des Nutzungslimits offen.

## Synchronisierung 06
Die fertigen MP3-Dateien wurden dekodiert und mit Rhubarb 1.14.0 / phonetic ausgewertet. M5-Begrüßung: 38 Lautabschnitte. M5-Audiobytes sind unverändert und per SHA256 an die Lautspur gebunden. Kein Wechsel auf eine andere Stimmfarbe. Die Laufzeit verwendet eine gemeinsame Performance-Auswertung aus Audio.currentTime. Pause, Puffern, Seek, Ortsbewegung und Drehung sperren die Sprechspur. Wiederaufnahme folgt derselben Audiozeit. Sprechen startet erst nach der Fußberuhigung. Der Körper dreht sich während der Rede nicht automatisch mit der Kamera. Der erste Begegnungsknopf startet die tatsächliche Aufnahme; es gibt keine separat laufende stumme Begrüßung mehr.

Der Armschwung wird nun von der tatsächlichen relativen Fußposition statt einem eigenen Sinusrhythmus abgeleitet. Frei erzeugte Aufnahmen ohne Lautspur werden nicht mehr mit einer lautstärkegesteuerten Animation als synchronisiert ausgegeben. Im Editor sind diese weiterhin anhör- und herunterladbar; die Übergabe an Kio verlangt eine vorbereitete Lautspur. Der Entwicklungs-CLI kann sie über --rhubarb erzeugen.

17 automatisierte Tests bestehen, einschließlich Pause/Puffern/Seek, gleicher Zeitposition nach Rücksprung, Bewegungssperren, Audiobyte-Identität und Lautspurgrenzen. Das ist eine technische Korrektur. Der Nutzer hat zu Recht die weiterhin unzureichende Gesamtwirkung gemeldet. Gesichtsmodell, Materialität und schauspielerische Natürlichkeit sind nicht als fertig abgenommen.



## Revision 07 — Gang und Präsenz (02.11.2026)

Nutzerbefund: Gehen wirkt wie Nach-vorne-Fallen. Ursache in der Kinematik nachgestellt: Auf einer 2,05-m-Cosinusroute über 4,8 s lief die Hüfte zeitweise 22,8 cm vor beiden Knöcheln; Hüfthöhe sank bis 87,5 cm.

Korrektur: frühes erstes Umsetzen, geschwindigkeitsabhängiger Schrittwechsel, vorausberechneter Landepunkt, kürzere Schwungphase, kleinere Fußhebung und schmalere Spur. Zusätzliche Vorneigung der Wirbelsäule entfällt, Absenkung der Hüfte reduziert. Fußkontakte bleiben weltfest. Gleiche Route nach Korrektur: maximal 1,8 cm (30 FPS) / 2,3 cm (60 FPS) Hüftvorlauf; minimale Hüfthöhe 96,7 cm. Knöchelgrenzen sind technische Indikatoren, keine vollständige biomechanische Stabilitätsprüfung.

Präsenz: Augen führen den Blick, Kopf und Brustkorb folgen zeitversetzt. Blick kehrt nach Mausruhe zur Kamera zurück. Während Drehung/Gang keine zusätzliche Brustdrehung. Augen drehen um ihren Mittelpunkt; zurückhaltende Wangen-/Brauenformen ergänzen die bisherigen Mundformen. M5-Audiodaten unverändert.

22 automatisierte Tests inklusive Standbein-Kontakt, Gang-Kollaps, FPS-Vergleich, Gesichtskanal-Reset und reduzierter Bewegung. Browser-Sichtprüfung weiterhin offen (vorheriges Nutzungslimit). Keine Freigabe als natürlicher oder finaler Charakter.

## Weiterarbeit ohne ausstehende Testergebnisse

1. Gangfehler beheben und Rückfallprüfung aufnehmen — Revision 07 umgesetzt.
2. Blick und Gesicht als gemeinsame Darstellung koordinieren — Revision 07 technische Basis umgesetzt, visuelle Abnahme offen.
3. Rauminteraktion (echtes Zeigen, Hinsehen, Greifen an Objekten) — offen, erfordert passende Bewegungen und Kontaktziele.
4. Lernmissionen und mathematische Richtigkeit — eigenständiger nächster Arbeitsblock; durch diese Revision nicht verändert oder neu bestätigt.
5. Testfeedback P1–P5 — ausstehend; Schüler-Testfassung unverändert lassen, keine Rückmeldungen erfinden.
6. Produktionsmodell mit detaillierter Gesichtssteuerung und hochwertigen Bewegungsdaten — weiterhin nötig für den angestrebten Realismus.


## Revision 08 — Arm-/Beinkoordination

Nutzerbefund: Beine und Arme/Hände passen nicht zusammen. Schulter-Eulerwinkel allein ignorierten die vorgebogene Bind-Pose des Arms. Neue Zweigelenk-Armführung mit Handziel aus dem jeweils gegenüberliegenden Fuß. Ellbogen beugen nach vorn mit geringer seitlicher Öffnung; Handgelenk wird von der Ellbogendrehung entkoppelt. Arme blenden beim Start/Stop aus der Ruhehaltung ein/aus. Brust-Gegendrehung zum Becken verstärkt. Gesicht, Audio und Fußkontaktplanung bleiben unverändert.

23 technische Tests bestehen, darunter neue Prüfung tatsächlicher Hand-/Ellbogenpositionen bei beiden Schrittseiten und drei Körperausrichtungen. Diese Prüfung belegt die kontralaterale Zuordnung und Gelenkreichen, keine menschliche Wahrnehmungsqualität. Sichtprüfung wegen des zuvor erreichten Browserlimits offen; keine finale Animationsfreigabe.


## Revision 09 — Richtungswechsel: schwebender Oberkörper

Nutzer bewertet Revision 08 als schlechter; Gang und Gesamtkoerper wirken weiterhin unpassend. Neuer ausdrücklicher Ansatz: menschlicher Kopf und Oberkörper als schwebender Begleiter, geisterartig. Kein weiterer Anspruch, den Laufstil mit dieser Variante zu beheben.

Umgesetzt: Hosen- und Fußoberflächen ausgeblendet, weicher auslaufender Jackenabschluss per Shader, dezenter Leuchtring und Schweif. Eigene Oberkörpersteuerung statt Gangplaner: ruhige Haltung, gedämpfte Blickbewegung, kleine audiozeitgebundene Handgeste. Keine Beinansteuerung, keine schrittabhängigen Armbewegungen. Eigene 3,2-s-Schwebefahrt mit quintischer Beschleunigung/Abbremsung; näherer Kameraausschnitt. M5-Audio unverändert.

25 technische Tests: untere Körperoberflächen unsichtbar; Gelenke endlich; keine Beinrotation während Translation; reduzierte Bewegung beendet Schweben; monotone Schwebekurve mit ruhigem Start/Stop. Shader und visuelle Wirkung noch nicht im Browser geprüft (bestehendes Nutzungslimit); keine visuelle Freigabe. Haupt-Lernwelt und P1–P5 bleiben unverändert.


## Revision 10 — Drehung und Charaktergestaltung

Automatisch: Blick führt zur Bewegungsrichtung; Körper dreht vor Abfahrt; nach Ankunft Rückwendung zum Betrachter. Manuell über Mehr: links/rechts um 90 Grad, zur Kamera ausrichten. Manuelle Ausrichtung wird gehalten. Begrenzte Drehgeschwindigkeit, kürzester Winkelweg, leichte Körperneigung und versetzte Brustdrehung. Pause hält Bewegung an; reduzierte Bewegung überspringt Drehanimation.

Gestaltung: dunkelblaue Jacke, Schulterakzent, hellere Metallteile, eigenes korallfarbenes Kompasszeichen. Sanft schmalere untere Gesichtsform, leicht ausgearbeitete Wangen, natürliche Hautabstimmung mit Hals/Händen, hellere grüngraue Iris. Blauer Lichtschweif. Keine neue Stimme.

27 technische Tests bestehen. Visueller Browsercheck und ästhetische Abnahme weiterhin offen wegen des bestehenden Browserlimits. Figur ist eine Weiterentwicklung der vorhandenen Geometrie, kein neu produziertes fotorealistisches Modell.


## Revision 11 — Oberkörper-Rig, Kleidung und Raumaktion

Auslöser: Nutzer lehnt Hand-/Armwirkung und Kleidung ab, fordert größere Meilensteine.

1. Eigenes Oberkörper-Arm-Rig ohne Gang/Fuß-Ersatzsignale. Handgelenke neben Taille auf 1,18 m, leicht gebeugte Arme; kleine einladende Geste hebt die rechte Hand. Anatomische Fingerrichtung wird mit dem Unterarm ausgerichtet statt Weltrotation zu fixieren. Handhalter auf 88 % skaliert. Alte Lauf-Module bleiben nur für bisherige Tests/Versionen erhalten und steuern die Schwebevariante nicht mehr.
2. Kleidungsumbau: alte Reißverschluss-, Taschen-, Stehkragen- und Bündchenanbauten ausgeblendet. Heller Stoff, dunkle Schulter-/Ärmelpartien, Rundhalsausschnitt, dezente Naht und kleines Kompasszeichen. Vorhandene Jacken-Grundgeometrie weiterverwendet; kein neues hochwertiges Textilmodell.
3. Erste Raumaktion: Nach Begrüßung zum Arbeitstisch schweben, Energie starten. Vier gleich große 3D-Zellen anklicken oder per vier zugänglichen Schaltflächen aktivieren. Ziel drei Viertel, mit Prüfen bestätigen. Fehler unterscheidet zu wenig vs. ganzes Objekt; Erfolg schaltet Konsolenlicht frei. Kio zeigt eine offene Präsentationshaltung; die Geste ist noch kein exakt auf ein Objekt gerichtetes Zeigen. M5 bleibt Begrüßung, keine neue Aufgabenaufnahme vorgetäuscht.

31 technische Tests bestehen: alle 16 Auswahlkombinationen geprüft, Korrektur/Reset, Hand-/Unterarm-Ausrichtung bei drei Körperwinkeln und drei Gestenstärken, Handgröße und Handgelenkhöhe. Browser-Sichtprüfung/Bedienprüfung nicht erfolgt (bestehendes Nutzungslimit). Meilensteine technisch umgesetzt, visuelle Abnahme offen. Neue Tischmission ist eine begrenzte Interaktionsprobe, kein vollständiger Grundkurs. Haupt-Lernwelt/Testkohorte unverändert.


## Revision 12 — Gegen V-Haltung und räumliche Neuausrichtung

Nutzerbefund: V-förmige Armhaltung, Gesamtbewegung und Welten weiterhin nicht auf Zielniveau. Arme nun seitlich statt vor Bauchmitte: neutrale Handgelenke bei x ±0,245 m, y 1,045 m; Ellbogenpol hauptsächlich sagittal statt weit nach außen. Test gegen erneutes Zusammenziehen in Körpermitte bei drei Ausrichtungen. Keine Freigabe als natürliche Bewegung.

Altes kastenförmiges Atelier ersetzt durch drei umschaltbare 3D-Raumvarianten: Observatorium mit gebogener Panoramastruktur, Planet und Sternpunkten; Dachgarten mit Pflanztrögen, Pergola und Stadtsilhouette; Energiekammer mit Portalringen und Kern. Gemeinsame Lernplattform, Lichtweg und moderne zentrale Konsole bleiben beim Wechsel erhalten. Umgebungswechsel unter Mehr > Welt. Energielicht reagiert auf Missionserfolg. Alle Varianten verwenden vorerst dieselbe Viertelmission, keine Behauptung zusätzlicher Grundkurse.

Oberfläche neu gestaltet: dunkle, kontrastreiche kompakte Aktionskarte, ruhige Typografie, begrenzte Textbreite, responsiver Rand und Schaltflächen. Keine Bild-/Modell-Zukäufe. M5 und Haupt-Testfassung unverändert.

34 technische Tests bestehen. Weltgeometrie, exklusiver Weltenwechsel, reduzierte Animation und Arm-Separation geprüft. Browser-Sicht-/Hörprüfung und gestalterische Abnahme weiterhin offen wegen des zuvor erreichten Nutzungslimits. Meilenstein ist eine neue überprüfbare räumliche Basis; AAA-Qualität oder ein Quantensprung sind nicht als erreicht zu bezeichnen.
