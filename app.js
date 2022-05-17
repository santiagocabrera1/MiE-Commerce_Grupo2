// modulos node
const express = require("express");
const app = express()
const path = require("path")
const session = require("express-session");
const cookieParser = require('cookie-parser')

// Puerto del servidor
const PORT = process.env.PORT || 3000

//levantar el servidor
app.listen(PORT, ()=>{
    console.log(`Se levanto el sevidor en http://localhost:${PORT}/`);
})

//creando carpeta estatica para los elementos de la pagina
app.use(express.static("public"));

// set view engine
app.set("view engine", "ejs");
app.set("views", "./src/views");

// para que los formularios accepten json
app.use(express.json());
app.use(express.urlencoded({extended:false}));

//
app.use(session({
    secret: "Ecommmerce",
    resave: false,
    saveUninitialized: true
}))

app.use(cookieParser())

// rutas de la pagina
app.use(require("./src/routers/home"));
app.use("/products",require("./src/routers/products"));
app.use("/cart",require("./src/routers/cart"));
app.use("/checkout",require("./src/routers/checkout"));
app.use("/register", require("./src/routers/register"));
app.use("/login",require("./src/routers/login"));
app.use("/not-found",require("./src/routers/notfound"));


// ruta pagenotfound//
app.use((req, res, next) => {
    res.status(404).redirect('/not-found');
    next();
})


app.use("/api", require("./src/routers/api"))


