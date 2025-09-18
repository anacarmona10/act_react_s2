import React from "react";

export default function TarjetaModulo({nombre, descripcion, categoria}) {
    return(
        <>
            <h3 className="nombre-modulo">{nombre}</h3>
            <p className="descripcion">{descripcion}</p>
            <div className="categoria">{categoria}</div>
        </>
    )
}