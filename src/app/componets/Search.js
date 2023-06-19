"use client";
import React from "react";
import restaurantes from "../data/restaurantes.json";



const Restaurantes = () => {
  const [busqueda, setBusqueda] = React.useState("");
  const [resultados, setResultados] = React.useState([]);

  const buscarRestaurantes = () => {
    const resultadosFiltrados = restaurantes.filter((restaurante) =>
      restaurante.nombre.toLowerCase().includes(busqueda.toLowerCase())
    );
    setResultados(resultadosFiltrados);
  };

  return (
    <div>
      <input
        type="text"
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
        placeholder="Buscar restaurantes"
      />
      <button onClick={buscarRestaurantes}>Buscar</button>

      {resultados.length > 0 ? (
        <ul>
          {resultados.map((restaurante, index) => (
            <li key={index}>
              <h3>{restaurante.nombre}</h3>
              <p>{restaurante.descripcion}</p>
              <p>{restaurante.direccion}</p>
              <img src={restaurante.imagen} alt={restaurante.nombre} />
            </li>
          ))}
        </ul>
      ) : (
        <p>No se encontraron resultados</p>
      )}
    </div>
  );
};

export default Restaurantes;
