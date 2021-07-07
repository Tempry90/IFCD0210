const express = require("express");
const app = express();
const port = 8080;

// Motor de plantilla
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

app.get("/", (req, res) => {
  res.render("index", { titulo: "inicio EJS" });
});

app.get("/nosotros", (req, res) => {
  res.render("nosotros", { titulo: "Nosotros EJS" });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
