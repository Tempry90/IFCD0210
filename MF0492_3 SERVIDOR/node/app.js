const express = require("express");
const app = express();
const port = 3000;

// Motor de plantilla
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

//estactico
app.use(express.static(__dirname + "/public"));

//Routes

app.get("/", (req, res) => {
  res.render("index", { titulo: "inicio EJS" });
});

app.get("/servicios", (req, res) => {
  res.render("servicios", {
    tituloServicios: "Este es un mensaje dinámico de servicios",
  });
});

app.use((req, res, next) => {
  res.status(404).render("404", {
    titulo: "404",
    descripcion: "Título del sitio web",
  });
});

//Lanzar el servidor
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
