# KlassenCheck – Qualitätsnachweis und Markteintritt (Arbeitsstand 2026-11-04)

**Keine Rechtsberatung und keine bestätigte Produktfreigabe.** Vor öffentlicher Vermarktung Fachleute für Schulcurriculum, Datenschutz und Verbraucherrecht einbeziehen.

## Abnahmeprotokoll Kio 3D (Pflicht)
| Kriterium | Test | Akzeptanz |
|---|---|---|
| iPhone Safari | 3D-Szene laden, Mission starten, Kamera drehen, zurücknavigieren | keine Fehlermeldung; alle Schaltflächen bedienbar |
| Android Chrome | dieselbe Mission | keine abgeschnittenen Bedienelemente |
| Leistung | 5 Minuten Szene bedienen | keine reproduzierbaren Abstürze, keine unkontrollierte Überhitzung |
| Figur | frontal, Profil, Drehung, Animation | Hände/Arme plausibel, kein Clipping |
| Mimik | Augen, Mund, Blick auf Lernobjekt | verständliche visuelle Reaktion |
| Zugänglichkeit | Tastatur, VoiceOver/TalkBack, reduzierte Bewegung | Kernaufgabe ohne Gesten-Zwang lösbar |
| Audio | stumm, Sprache optional, Untertitel | keine automatische laute Wiedergabe |

**Status:** Quellcodeänderungen vorhanden; diese Tests **nicht durchgeführt**. Ohne Test kein „bestanden“.

## Fachliche Abnahme
- Niedersachsen: Kerncurricula Mathematik der Oberschule in der aktuell geltenden Fassung beschaffen; Jahrgangs- und Niveauzuordnung dokumentieren.
- Mindestens zwei unabhängige Prüfungen je Aufgabe: mathematische Korrektheit und didaktische Verständlichkeit.
- Kompetenz, Vorwissen, Lösung, Distraktoren, Fehlertyp, Hilfen und Transfer pro Mission versionieren.
- Keine Gleichsetzung von prototypischen Welten mit schulrechtlich geprüften Lernplänen.

## Datenschutz / Minderjährige
- Dateninventar: welche Daten werden auf welchem Gerät oder Server gespeichert? Aktuell im HTML-Prototyp lokale Versuche und Fortschritt.
- Rechtsgrundlage je Verarbeitung nach DSGVO dokumentieren; Art. 8 zur Einwilligung von Kindern bei einschlägigen Diensten der Informationsgesellschaft prüfen.
- Datenschutzhinweise altersgerecht und für Sorgeberechtigte; Lösch- und Auskunftsprozesse; Datensicherheit; AV-Verträge für Drittanbieter; Aufbewahrungsfristen.
- Vor Einführung von Sprache, KI-Chat, Analytics oder Nutzerkonten Datenschutz-Folgen und Erforderlichkeit neu prüfen.
- Kein offenes Gesprächssystem ohne Schutzkonzept für Minderjährige.

## Produkt und Markt
- Anbieterkennzeichnung und Kontaktmöglichkeiten nach geltendem deutschen Recht.
- Urheber-/Lizenzprüfung für Musik, Stimmen, Charaktere, Modelle, Schriften und Aufgabenmaterial.
- Bei entgeltlichem Angebot: Vertragsinformationen, Preisangaben, Widerruf, Kündigung, Zahlungsabwicklung.
- Barrierefreiheitsanforderungen (insbesondere BFSG-Anwendbarkeit auf das konkrete Angebot) juristisch klären.
- EU-KI-Verordnung: Pflichten und mögliche Einstufung des konkreten KI-Einsatzes prüfen.
- Kinder- und Jugendschutz, transparente Belohnungsmechaniken und keine manipulativen Kaufanreize.
- Verlässliche Fehler-/Supportprozesse, Backups, Sicherheitstests und klare Produktverantwortung.

## Pilot-Gates
1. **G1:** zwei vollständige Klasse-6-Missionen; deterministische Korrektur; Kio reagiert.
2. **G2:** dokumentierte iOS-/Android-Abnahme; Kerninteraktion barrierearm.
3. **G3:** Aufgaben fachlich geprüft, OBS-Zuordnung bestätigt.
4. **G4:** Datenschutz und Rechte geprüft; rechtliche Pflichttexte veröffentlicht.
5. **G5:** betreuter Pilot mit mindestens fünf echten Personen, qualitative Rückmeldung und messbare Abbruchpunkte.

Keine Veröffentlichung als „marktreif“, bevor G1–G4 erfüllt sind.
