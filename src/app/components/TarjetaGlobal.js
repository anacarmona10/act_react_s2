import React from "react";

export default function TarjetaGlobal({ titulo, contenido, color}) {
    const style = color ? {'--tarjeta-color': color } : undefined;
    return(
        <article className="tarjeta-global" style={style}>
            <h3 className="titulo-global">{titulo}</h3>
            <div className="contenido-global">{contenido}</div>
        </article>
    )
}