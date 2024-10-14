import React, { useEffect } from 'react';
import mermaid from 'mermaid';

// MermaidDiagramFlow1  Beispiel für Flowchart Top-Down, um Mermaid zu testen

const MermaidDiagramFlow1 = () => {
  const diagramDefinition = `
    graph TD;
      A[Start] --> B{Entscheidung};
      B -->|Ja| C[Ergebnis 1];
      B -->|Nein| D[Ergebnis 2];
  `;

  useEffect(() => {
    // Mermaid initialisieren
    mermaid.initialize({ startOnLoad: true });

    // Mermaid Diagramm rendern
    mermaid.render('mermaidDiagramFlow1', diagramDefinition, (svgCode) => {
      document.getElementById('mermaidContainerFlow1').innerHTML = svgCode;
    });
  }, [diagramDefinition]);

  return (
    <div>
      <div id="mermaidContainerFlow1"></div>
    </div>
  );
};

export default MermaidDiagramFlow1;
