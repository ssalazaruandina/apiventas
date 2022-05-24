const express = require('express')

const router = express.Router()

router.get('/', (req,res) => {
  res.json([
    {
      nombre: "categoria01",
      precio: 15
    },
    {
      nombre: "categoria02",
      precio: 25
    }
  ])
})

router.get('/:id',(req,res) => {
  const {id} = req.params
  res.json(
    {
      id: id,
      nombre: "categoria01",
      precio: 15
    },
  );
});

router.get('/:idcat/productos/:idprod',(req,res) => {
  const {idcat, idprod} = req.params
  res.json(
    {
      idProducto: idprod,
      nombre: "categoria01",
      precio: 15,
      idCategoria: idcat
    },
  );
});

module.exports = router
