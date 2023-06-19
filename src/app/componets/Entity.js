import React from "react";
import styles from "../../../public/Entity.module.css";


const Entity = (props) => {
  return (
    <div className={styles.entity}>
      <h2>Nombre: {props.nombre}</h2>
      <p>Descripción: {props.descripcion}</p>
      <p>Dirección: {props.direccion}</p>
      <img src={props.imagen} alt="Imagen del restaurante" />
    </div>
  );
};

export default Entity;
