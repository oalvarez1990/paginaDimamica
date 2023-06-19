import React from "react";
import Entity from "./componets/Entity";
import Navbar from "./componets/Navbar";
import restaurantesData from "./data/restaurantes.json";
import Restaurantes from './componets/Search'
import crearRestaurante from './componets/NuevoRestaurante'

const Home = () => {
  return (
    <main>
      <Navbar />
      <h1>Restaurantes The Story</h1>
      {restaurantesData.map((entidad, index) => (
        <Entity
          key={index}
          nombre={entidad.nombre}
          descripcion={entidad.descripcion}
          direccion={entidad.direccion}
          imagen={entidad.imagen}
        />
      ))}
      <Restaurantes />
      <crearRestaurante />

    </main>
  );
};

export default Home;
