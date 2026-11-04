# KlassenCheck – aktueller Projektstatus

Stand: 2026-11-03

## Projektquellen
- GitHub (dieses Repository): Kio und Lernwelten, Revision 13, Commit 73b17d9dbc81451fdb75bb78b29a6fa0b7c818d8. Technische Tests laut Revisionsprotokoll: 37 bestanden. Visuelle Browser-Abnahme offen.
- Lovable: KlassenCheck Entdeckerakademie, Projekt 3776b796-28aa-4783-bf83-04e2b0da2b26, https://lovable.dev/projects/3776b796-28aa-4783-bf83-04e2b0da2b26 . Eigenständige Lernplattform; nicht mit diesem Repository synchronisiert.

## Bestätigter Stand
- GitHub: weiterentwickelter menschlicher Kio mit Skelett, Mimik-/Mundkanälen, Händen, illustrativer Materialrevision und drei 3D-Weltvarianten. Gestalterische Abnahme ausstehend.
- Lovable: initiale Bruch-Lernplattform mit Fortschritt und Elternansicht. Ein weiterer Entwicklungsauftrag zur Bruch-Mission wurde vom Agenten als abgeschlossen gemeldet; Code-Diff, Tests und Vorschau sind noch unabhängig zu verifizieren.
- Eine Integration der GitHub-Kio-Assets in Lovable ist **nicht** erfolgt. Dort ist die Kio-Asset-URL weiterhin leer und ein neutraler Platzhalter vorgesehen.

## Blocker
- Lovable-Workspace meldet am 2026-11-03: Kontingent erschöpft. Neuer Build-Auftrag abgelehnt. Keine kostenpflichtige Freischaltung beauftragt.

## Nächste Schritte
1. Lovable-Commit, Build und Tests der abgeschlossenen Bruch-Mission verifizieren.
2. Vorhandene GitHub-Kio-Module, Assets und Lizenzlage für Integration inventarisieren.
3. Kio-Original in Lovable technisch portieren und visuell auf Mobilgeräten abnehmen; keine Primitive-Neuschöpfung.
4. Weitere Bruch-Missionen (Äquivalenz, Vergleich, Transfer), danach Körper und Flächen ausbauen.
5. Bei jedem bestätigten Meilenstein diese Datei aktualisieren. Implementiert, getestet und abgenommen getrennt kennzeichnen.

## Dokumentationsregel
Diese Datei ist der zentrale, zuletzt **bestätigte** Status. Entwicklungswünsche sind keine Implementierung. Historie in AENDERUNGSPROTOKOLL.md.

## Ergänzung 2026-11-03 – Referenz Diagnoselabor
Der Nutzer hat die Website `https://klassencheck-diagnoselabor.christianzerfas.chatgpt.site` als maßgeblichen älteren Entwicklungsstand bestätigt und einen echten Screenshot der mobilen Startseite bereitgestellt. Die sichtbare UI umfasst die Akademie-der-Entdecker-Identität, Klassenauswahl und die Karten „Brüche verstehen“ sowie „Würfel, Quader & Volumen“. Diese Referenz wurde in [VERBINDLICHE_DESIGNBASIS.md](VERBINDLICHE_DESIGNBASIS.md) als verbindliche Gestaltungsvorgabe dokumentiert (Commit e54fc2f). Funktionen hinter den Karten und Quellstand des Diagnoselabors bleiben unbestätigt. Noch keine technische Integration oder neue spielbare Mission in diesem Schritt.

## Ergänzung 2026-11-04 – tatsächlicher Codefortschritt
- **Implementiert und committed:** framework-unabhängiges Diagnosemodul `learning/grade6-diagnostic-missions.mjs` mit sechs Aufgaben: zwei zu äquivalenten Brüchen, zwei zum Bruchvergleich und zwei zu Einheitswürfeln/Quadern. Jeweils eine Grundaufgabe und ein eigenständiger Transfer. Exakte Bruchrechnung per BigInt-Kreuzprodukt, deterministische Antwortauswertung, spezifisches Feedback und Transferverweise. Commit a52dc86.
- **Testcode committed:** `learning/grade6-diagnostic-missions.test.mjs` mit Node-Bordmitteln; Testfälle für Aufgabenstruktur, Äquivalenz, Vergleich, Feedback und Transfer. Commit 706af5e. **Tests noch nicht ausgeführt**; daher kein grüner Teststatus behauptet. Ausführen: `node --test learning/grade6-diagnostic-missions.test.mjs`.
- **Noch nicht integriert:** Aufgabenmodul ist derzeit eigenständig und nicht in die UI/3D-Szenen eingebunden. Die tatsächliche Diagnoselabor-App und ihre Quelldateien sind noch nicht zugeordnet. Keine neue öffentliche Spielversion, kein visueller Fortschritt in der App in diesem Schritt.
- **Nächster überprüfbarer Meilenstein:** Testlauf, Diagnoselabor-Code zuordnen, Missionen mit echten 3D-Interaktionen verbinden, Screenshot aus dem laufenden Build.

## 2026-11-04 – Spielbarer Integrationsprototyp
- **Neu im Repository:** `prototype/diagnoselabor-integration.html`, Commit `78cb721e44a4e28831401d705e1604041ba0cf1c`.
- Mobile Startseite nach sichtbarer Diagnoselabor-Referenz (Petrol/Gold, Akademie der Entdecker, Klassenwahl, zwei Themenkarten), je drei klickbare Aufgaben für Brüche und Würfel/Quader, Auswahl und Prüfung, Hinweis, Transfer, lokaler Fortschritt.
- **Wichtige Grenzen:** Standalone-HTML, noch keine Anbindung an das tatsächliche Diagnoselabor-Deployment; Kio-Revision 13 und Three.js-Welten noch nicht integriert; keine echte 3D-Interaktion, nur visuell räumliche CSS-Würfel; Browser- und Testlauf noch nicht unabhängig bestätigt. GitHub-Commit allein ist keine öffentliche Veröffentlichung.
- Nächster Schritt: im Browser prüfen, anschließend originale Kio-Module und interaktive 3D-Szenen einbinden und erst nach Abnahme eine gemeinsame Veröffentlichung planen.

## 2026-11-04 – Weitere spielerische Interaktion
- `prototype/cube-workshop.js` implementiert das Hinzufügen/Entfernen von Einheitswürfeln und einen Live-Zähler; in `prototype/diagnoselabor-integration.html` eingebunden (Commits a0be581, b502038).
- `prototype/kio-guide.js` ergänzt kontextabhängiges Textfeedback bei Missionsbeginn, Fehlern, richtigen Lösungen und Hilfen; im Prototyp eingebunden (Commits e12d332, 66b50af).
- **Noch offen:** Laufzeitprüfung auf Mobilgeräten, reale 3D-Würfelgeometrie statt CSS-Würfeln, Anbindung an 3D-Kio, Tests, Übernahme ins Diagnoselabor-Deployment und curriculare Zuordnung. Der neue Code ist gespeichert, aber nicht als im Browser abgenommen ausgewiesen.
