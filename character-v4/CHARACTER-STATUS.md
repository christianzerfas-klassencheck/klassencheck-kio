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
