import React from "react";
import styles from './TarjetaModulo.module.css'


export default function TarjetaModulo({nombre, descripcion, categoria, variante}) {
    const clases = `${styles. tarjeta} ${styles[variante]}`
    return(
        <article className={clases} >
            <div className={styles.encabezado}>
            <h3 className={styles.titulo}>{nombre}</h3>
            </div>
            <p className={styles.descripcion}>{descripcion}</p>
            <div className={styles.categoria}>{categoria}</div>
        </article>
    )
}