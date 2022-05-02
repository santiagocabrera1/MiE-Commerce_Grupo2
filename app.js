// modulos node
const express = require("express");
const app = express()
const path = require("path")

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
app.set("views", "./views");

// para que los formularios accepten json
app.use(express.json());
app.use(express.urlencoded({extended:false}));

// rutas de la pagina
app.use(require("./routers/home"));
app.use("/products",require("./routers/product"));
app.use("/cart",require("./routers/cart"));
app.use("/checkout",require("./routers/checkout"));
app.use("/register", require("./routers/register"));
app.use("/login",require("./routers/login"));


