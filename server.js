/*============================[Modulos]============================*/
import express from "express";
import session from "express-session";
import passport from "passport";
import { Strategy } from "passport-local";
const LocalStrategy = Strategy;
import exphbs from "express-handlebars";
import path from "path";
import mongoose from "mongoose";

mongoose
  .connect("mongodb://localhost:27017/passport-local")
  .then(() => console.log("DB is connected"))
  .catch((err) => console.log(err));
const app = express();

/*----------- Session -----------*/
app.use(
  session({
    secret: "pepe",
    resave: false,
    saveUninitialized: false,
  })
);

/*----------- Motor de plantillas -----------*/
app.set("views", path.join(path.dirname(""), "./src/views"));
app.engine(
  ".hbs",
  exphbs.engine({
    defaultLayout: "main",
    layoutsDir: path.join(app.get("views"), "layouts"),
    extname: ".hbs",
  })
);
app.set("view engine", ".hbs");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

/*==========================[Passport]===========================*/

/*============================[Rutas]============================*/

app.get("/", (req, res) => {});

app.get("/login", (req, res) => {
  res.render("login");
});

app.post("/login", (req, res) => {});

app.get("/register", (req, res) => {
  res.render("register");
});

app.post("/register", (req, res) => {
  const { username, password, direccion } = req.body;
});

app.get("/datos", (req, res) => {});

app.get("/logout", (req, res, next) => {
  //logout
});

/*============================[Servidor]============================*/
const PORT = 8080;
const server = app.listen(PORT, () => {
  console.log(`Servidor escuchando en puerto ${PORT}`);
});
server.on("error", (error) => {
  console.error(`Error en el servidor ${error}`);
});
