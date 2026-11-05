# KlassenCheck – Entwicklungsplan nach Beginn des Pilottests

## Produktentscheidung
Eine vollständige spielbare Referenzmission vor dem Ausbau weiterer Inhalte. Keine unkontrollierte Erweiterung der Jahrgänge 5–10 während der Pilotphase.

## P0 – Sicherheit und Funktion
- CI grün: Node-Tests, mobile Chromium-Emulation, 3D-CDN-Ausfall
- Antwortvalidierung und Fehlerdiagnose korrekt
- Kein blockierter Lernpfad bei gesperrtem Browser-Speicher
- Mobile Bedienbarkeit mit echten iOS-/Android-Geräten gesondert testen
- Pilotfeedback ohne personenbezogene Daten von Minderjährigen erfassen

## P1 – Lernhandlung: Referenzmission Proportionsstadt
**Spielziel:** Eine Brücke muss mit einer bestimmten Anzahl Felder gebaut werden.
**Handlung:** Felder hinzufügen/entfernen, benötigtes Material berechnen, Brücke fertigstellen.
**Diagnose:** Additiver statt proportionaler Denkweg wird erkannt und mit einem konkreten Hinweis korrigiert.
**Sichtbare Konsequenz:** Eine korrekte Lösung aktiviert die Brücke; eine falsche Antwort zeigt eine verständliche Korrekturmöglichkeit.
**Abschluss:** Erfolg sichtbar, Fortschritt lokal gespeichert, nächste Mission angeboten.
**Akzeptanz:** Ohne Anleitung in <=2 Minuten startbar; kein Pflichttext über drei kurze Sätze pro Schritt; per Touch bedienbar; 2D-Fallback funktionsfähig.

## P2 – Pädagogische Qualität
- Aufgaben und Lösungen gegen amtliches niedersächsisches OBS-Kerncurriculum prüfen; Zuordnung G/E-Anforderungen nicht behaupten, bevor geprüft
- Fehlerdiagnose von reinen Zahlenmustern auf nachvollziehbare Fehlkonzepte erweitern
- Lernstand: richtige Lösung, benötigte Hinweise und Fehlversuche unterscheiden
- Transferaufgabe nach erfolgreicher Erstlösung

## P3 – Kio und 3D
- Animationskonzept: Idle, Begrüßung, Zeigen, Denken, Feedback, Erfolg
- Natürliche Haltung, nachvollziehbare Gestik und reduzierte Bildschirmtexte
- 3D nur als funktionale Spielumgebung, nicht als Dekoration
- Performance-Budget und robuste 2D-Alternative für schwache Geräte

## P4 – Auswertung der fünf Testpersonen
- P1 Technik/Navigation, P2 Akademie, P3 Körperwerkstatt, P4 Jahrgangsmissionen, P5 Eltern-Kind-Einstieg
- Bewertungsachsen: Spielspaß, Verständlichkeit, Bedienung, Kio, Wiederspielbereitschaft
- Probleme priorisieren: Blocker / Lernhindernis / Qualitätsmangel / Idee
- Keine Änderungen an Testabläufen ohne Dokumentation; Testergebnisse nach Version unterscheiden

## Nächste Freigabeentscheidung
Eine Version wird erst für weitere Testpersonen empfohlen, wenn:
1. CI grün ist;
2. alle fünf Einstiegslinks manuell aufrufbar sind;
3. keine kritischen Fehler aus Pilotfeedback offen sind;
4. die Referenzmission mit falscher und richtiger Antwort vollständig spielbar ist.
