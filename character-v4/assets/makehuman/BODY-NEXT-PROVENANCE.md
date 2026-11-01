# Kio · anatomische Körperrevision B

Stand 31.10.2026. Dieselben lokal gepinnten CC0-Kernassets wie in PROVENANCE.md; keine neuen Fremdmodelle und kein MakeHuman-Programmcode.

Eigenes Skript scripts/build-avatar-next-body.py: dokumentierte Morphgewichte anwenden, body-Gruppe von Helpers trennen, Körperflächen unterhalb des Kopfes extrahieren, Hände und Füße ausnehmen, metrisch skalieren, Standbreite anpassen, opaque Jacken-/Hosenflächen ausformen und triangulieren. Jacke und Hose sind vollständig bedeckende Kleidungsflächen. Das Ausgangsmesh wird in dieser Ansicht nicht unbekleidet gezeigt.

Kopf und Hände nutzen die zuvor dokumentierten Derivate. Eigene Ergänzungen: anatomisch positioniertes Skelett, räumliche Hautgewichte, Schuhe/Kragen/Reißverschluss/Taschen, deterministische Haarstruktur, Mund-/Smile-Morphziele und sechs Animationsclips. Die grobe Mundöffnung ist keine phonemgenaue Lippenanimation. Keine zugesicherte fotorealistische Produktionsqualität oder Fußkontakt-/IK-Abnahme.

body-next-manifest.json enthält Eingabe- und Ausgabehashes. Die bisherige Testpilot-Fassung, ihre Avatarimporte und das ZIP werden nicht ersetzt.
