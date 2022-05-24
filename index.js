const express = require("express");
const rutas = require('./routes')

const aplicacion = express();
const port = 3500;

aplicacion.use(express.json())
//Parecido al routing
aplicacion.get('/', (req,res) => {
  res.send("Hola desde pagina principal");
});

aplicacion.post('/', (req,res) => {
  res.send("Hola desde pagina principal");
});

rutas(aplicacion)

aplicacion.listen(port, () => {
  console.log("Puerto activo: "+port);
});
