"use client";
import React, { useState } from "react";

const NuevoRestaurante = () => {
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [direccion, setDireccion] = useState("");
  const [imagen, setImagen] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/restaurantes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ nombre, descripcion, direccion, imagen }),
      });

      if (response.ok) {
        console.log("Nuevo restaurante guardado correctamente");
        // Resetear los campos del formulario
        setNombre("");
        setDescripcion("");
        setDireccion("");
        setImagen("");
      } else {
        console.error("Error al guardar el nuevo restaurante");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Crear Nuevo Restaurante</h2>
      <form onSubmit={handleSubmit}>
        {/* Campos del formulario */}
        {/* ... */}
        <button type="submit">Guardar</button>
      </form>
    </div>
  );
};

export default NuevoRestaurante;
