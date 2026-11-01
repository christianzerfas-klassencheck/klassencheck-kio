# Kio – Herkunft der anatomischen Daten

Stand 30.10.2026. Neuer Kopf: Derivat von MakeHuman-Kernassets, keine Figur aus einem Videospiel.

Offizielle Lizenzdarstellung: https://www.makehumancommunity.org/about/license.html
Vollständige Aufteilung: https://github.com/makehumancommunity/makehuman/blob/master/LICENSE.md

Kern-Basemesh und Targets sind nach diesen Unterlagen CC0-1.0. MakeHuman-Programmcode ist dagegen AGPL. In diesem Projekt wird nur der Asset-Datenbestand gelesen; MakeHuman-Programmcode wird nicht eingebunden. Drittanbieterassets aus der Community wurden nicht verwendet.

Verwendete Daten:
- makehuman/data/3dobjs/base.obj
- makehuman/data/targets/macrodetails/caucasian-male-young.target, Gewicht 0,8
- makehuman/data/targets/macrodetails/universal-male-young-averagemuscle-averageweight.target, Gewicht 0,6; diese Referenzdatei enthält keine Vertexänderungen.

Verarbeitung durch eigenes scripts/build-human-head.py: Morphdeltas anwenden, Kopf/engen Hals aus body-Gruppe extrahieren, Helpers und restlichen Körper verwerfen, Einheiten und Kopfanker anpassen, triangulieren, UVs erhalten. Die verbleibenden Körper-, Kleidungs- und Bewegungsdaten wurden im Projekt selbst aufgebaut. Haare sind eine eigene vereinfachte Ableitung der Schädeloberfläche.

manifest.json enthält Originalpfade, Git-Blob-Hashes, SHA-256 der Eingaben und des Derivats. Die Originaleingaben wurden gegen die offizielle Git-Dateiliste geprüft. LICENSE.CC0.txt enthält die Asset-Lizenz. Keine pauschale Freigabe aller Marken-, Persönlichkeits-, Vertriebs- oder sonstigen Produktrechte.

## Anatomische Hände (0.19)

Dieselben Kernassets und Morphgewichte werden auch durch scripts/build-human-hands.py verarbeitet: linke und rechte Hand anhand Handgelenk-/Finger-Joints extrahieren, in das lokale Handkoordinatensystem transformieren, UVs erhalten und triangulieren. Je Seite 1.859 Vertices und 3.236 Dreiecke. Der abgeleitete Datenhash steht in manifest.json. Eigene Rig-Erzeugung: pro Hand 16 Knochen (Handfläche und je drei pro Finger), Hautgewichte anhand der Segmentnähe. Drei begrenzte Handhaltungen, kein vollständiges Hand-/Kontakt-/IK-System.
