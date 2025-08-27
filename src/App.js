import React from "react";
import VisualizadorProps from "./visualizadorProps";
function App() {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>Ejemplo de uso de props</h1>
      <VisualizadorProps 
        nombre="Ayyub" 
        edad={27} 
        ciudad="Madrid" 
      />
    </div>
  );
}

export default App;
