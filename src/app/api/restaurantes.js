import fs from "fs";
import path from "path";

export default function handler(req, res) {
  if (req.method === "POST") {
    const { nombre, descripcion, direccion, imagen } = req.body;

    const nuevoRestaurante = {
      nombre,
      descripcion,
      direccion,
      imagen,
    };

    const restaurantesFilePath = path.join(
      process.cwd(),
      "public",
      "restaurantes.json"
    );

    fs.readFile(restaurantesFilePath, "utf8", (err, data) => {
      if (err) {
        console.error(err);
        res
          .status(500)
          .json({ message: "Error al leer el archivo de restaurantes" });
        return;
      }

      const restaurantes = JSON.parse(data);
      restaurantes.push(nuevoRestaurante);

      fs.writeFile(
        restaurantesFilePath,
        JSON.stringify(restaurantes),
        "utf8",
        (err) => {
          if (err) {
            console.error(err);
            res
              .status(500)
              .json({ message: "Error al guardar el nuevo restaurante" });
            return;
          }

          res
            .status(200)
            .json({ message: "Nuevo restaurante guardado correctamente" });
        }
      );
    });
  } else {
    res.status(405).json({ message: "Método no permitido" });
  }
}
