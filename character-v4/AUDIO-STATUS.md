# Kios Audioerzeugung

## Umgesetzt und tatsächlich ausgeführt
Supertonic 3 (31 Sprachen einschließlich Deutsch), Modellrevision aafc6e32416a594460b32413efc49d7fe4ce6d46, deutscher Sprachcode de, 8 Schritte, Geschwindigkeit 1.0. Python-SDK 1.3.1 wurde installiert, die offiziellen Modellgewichte geladen und drei neue Aufnahmen wurden erzeugt:

| Aufnahme | Dauer | RMS | Spitzenwert |
|---|---:|---:|---:|
| Begrüßung M5 | 6,34 s | 0,0561 | 0,3449 |
| Begrüßung M3 | 5,22 s | 0,0510 | 0,3871 |
| Mathematik M5 | 8,71 s | 0,0579 | 0,3858 |

Das belegt ausgeführte Synthese und technisch gültige, nicht stumme, nicht übersteuerte Dateien. Eine menschliche Hörabnahme für Aussprache, Stil und Wirkung steht aus. Die Aufnahmen sind unter voice-*.js als komprimiertes MP3 eingebettet und direkt anhörbar.

## Browsereditor
audio.html bietet Text, drei Presets, lokale Erzeugung in einem Web Worker, WAV-Download und Übergabe vorbereiteter Aufnahmen an Kio. Die erste Modellladung umfasst rund 398 MB ONNX-Dateien plus Laufzeit und Konfiguration. Kein API-Schlüssel und keine kostenpflichtige Sprach-API. Modellcode und Gewichte kommen von jsDelivr und Hugging Face. Die Synthese selbst sendet den Text nicht an einen Sprachdienst. WebAssembly nutzt einen Thread, damit keine Cross-Origin-Isolation auf GitHub Pages vorausgesetzt wird. Diese Browserstrecke ist implementiert, aber noch nicht Ende zu Ende auf iPhone/Safari oder Chrome abgenommen. Bei Speicher-, Netz- oder Laufzeitfehlern wird ein Fehler angezeigt; keine stille Rückkehr zur Gerätestimme.

Das Modell wird erst nach Klick geladen. Abbrechen beendet den Worker. Eine bewusste Übergabe an Kio speichert die Aufnahme lokal in IndexedDB. Mathematische Zeichen werden vor der Synthese in deutsche Lesarten umgesetzt. Auf 280 Zeichen begrenzt, um kurze Regie- und Ausspracheprüfungen zu unterstützen.

## Charakterverknüpfung
Kio spielt die neu erzeugte M5-Begrüßung auf ausdrücklichen Klick. Im Editor ausgewählte Aufnahmen können stattdessen verwendet werden. Vorbereitete Aufnahmen werden aus einer offline abgeleiteten Lautspur gesteuert. Mundformen und Gesten folgen Audio.currentTime. Es handelt sich um grobe Lautklassen, keine gesicherte deutsche Phonem- oder Lippenabnahme. Frei erzeugte Browseraufnahmen ohne Lautspur bleiben hör- und herunterladbar; die Charakterübergabe ist für diese gesperrt. Alte visembasierte Referenzaufnahme C bleibt als Entwicklungsasset erhalten und ist nicht die Standardstimme dieser neuen Fassung.

## Lokale Wiederholung
In einer Python-Umgebung: pip install -r requirements-audio.txt. Danach python generate_audio.py --text "Hey. Ich bin Kio. Wir schauen uns das zusammen an." --voice M5 --output generated/Kio.wav. Modelle werden in .audio-models geladen; Modelle und Rohaufnahmen sind von Git ausgeschlossen.

## Quellen und Rechte
- Offizielles Beispiel: https://github.com/supertone-oss-archive/supertonic/tree/main/web, helper.js Blob 8e16388e7dcb77fc7df1e3ace71ac340699e3318; MIT-Lizenz unter vendor/SUPERTONIC-LICENSE.txt. Importpfad für gepinnte ONNX-Runtime angepasst.
- Modell: https://huggingface.co/supertone-oss-archive/supertonic-3 ; OpenRAIL-M-Lizenz unter vendor/SUPERTONIC-MODEL-LICENSE.txt.
- Runtime: onnxruntime-web 1.22.0, WebAssembly, CPU. Runtime-Modul öffentlich erreichbar geprüft. Keine Behauptung einer abgeschlossenen Browser- oder Stimmfreigabe.
