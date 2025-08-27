import React,{useEffect, useState} from "react";

function VisualizadorProps({nombre, edad, ciudad}){
    const [contador, setContador] = useState (0);

    useEffect(() =>{
        console.log(`El contador ahora es: ${contador}`);
    }, [contador]);

    return(
        <div style={{ border: "1px solid #b63434ff", borderRadius: "8px", padding: "1rem", marginTop: "1rem" }}>
            <h2>Datos Recibidos</h2>
            <p><strong>Nombre: </strong>{nombre}</p>
            <p><strong>Edad: </strong>{edad}</p>
            <p><strong>Ciudad: </strong> {ciudad}</p>
            
            <h3>Estado internor (contador)</h3>
            <p>Contado: {contador}</p>
            <button onClick={() => setContador(contador+1)}>Incrementar</button>
            </div>
    );
}
export default VisualizadorProps;