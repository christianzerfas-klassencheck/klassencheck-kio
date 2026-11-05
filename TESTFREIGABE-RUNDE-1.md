# KlassenCheck – Testfreigabe Runde 1

Status: **Pilot / Prototyp**, keine fertige Lernplattform. Freigabe nur nach grünem GitHub-Qualitätslauf und manuellem Öffnen der Links auf einem Mobilgerät.

## Fünf Testpersonen
P1: Projektverantwortlicher (Technik, Navigation, Speicherung)
P2: Schüler/in Klasse 6 (Entdeckerakademie)
P3: Schüler/in Klasse 6 (Körperwerkstatt)
P4: Schüler/in Klasse 7–10 (Jahrgangsmissionen)
P5: Elternteil mit Kind (Verständlichkeit und selbstständige Nutzung)

## Testlinks
- Startseite: https://christianzerfas-klassencheck.github.io/klassencheck-kio/
- Entdeckerakademie Klasse 6: https://christianzerfas-klassencheck.github.io/klassencheck-kio/prototype/diagnoselabor-integration.html
- Körperwerkstatt Klasse 6: https://christianzerfas-klassencheck.github.io/klassencheck-kio/prototype/koerperwerkstatt.html
- Lernwelten Klasse 7–10: https://christianzerfas-klassencheck.github.io/klassencheck-kio/prototype/lernwelten-7-10.html
- Proportionsstadt Klasse 7: https://christianzerfas-klassencheck.github.io/klassencheck-kio/prototype/proportionsstadt.html

## Einheitlicher Testauftrag (10–15 Minuten)
1. Link öffnen und ohne Erklärung herausfinden, wie man startet.
2. Mindestens eine Aufgabe absichtlich falsch beantworten. Ist Kios Hilfe verständlich?
3. Aufgabe richtig lösen. Ist erkennbar, was sich verändert hat?
4. Seite neu laden. Bleibt der Fortschritt erhalten?
5. Auf dem eigenen Gerät prüfen, ob Buttons, Text und 3D- oder 2D-Ansicht bedienbar sind.

## Rückmeldung (keine Namen oder personenbezogenen Daten von Kindern)
- Testkennung P1–P5 und getesteter Link
- Gerät und Browser (z. B. iPhone/Safari)
- Einstieg verständlich? (1–5)
- Spielspaß? (1–5)
- Matheaufgabe verständlich? (1–5)
- Kios Hilfe nützlich? (1–5)
- Wo wurde abgebrochen oder etwas nicht verstanden?
- Technischer Fehler? Genaue Aktion und sichtbare Meldung
- Würdest du eine weitere Mission spielen? Ja/Nein/Warum?

## Datenschutz und Grenzen
- Teilnahme freiwillig, bei Minderjährigen nur mit Einverständnis der Sorgeberechtigten.
- Keine Klarnamen, Kontaktdaten, Fotos, Sprachaufnahmen oder Leistungsprofile der Kinder im Feedback erfassen.
- Fortschritt liegt lokal im Browser; nicht als dauerhaftes Nutzerkonto betrachten.
- GitHub Pages ist öffentlich erreichbar: keine vertraulichen Testdaten in URLs, Issues oder Repository ablegen.
- Ein grüner CI-Test ersetzt keinen echten Test auf Safari/iOS oder eine fachliche Curriculumprüfung.

## Freigabekriterien
- GitHub Actions: Node-Tests und browser-smoke grün.
- Alle fünf Links laden und Hauptaktionen funktionieren.
- Keine blockierenden Fehler auf mindestens einem echten Smartphone.
- Ein vollständiger Lernpfad inklusive falscher Antwort, Feedback und korrekter Lösung funktioniert.
