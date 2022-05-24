const express = require("express");

const ProductosServices = require('../services/productos.service');
const servicioProducto = new ProductosServices();
const router = express.Router();

router.get('/',(req,res) => {
  const productos = servicioProducto.findAll();
  res.send(productos);
});

// router.get('/:id', (req,res) => {
//   const {id} = req.params
// })

router.post('/', (req,res) => {
  const body = req.body;
  servicioProducto.create(body);
  res.status(201).json({
    mensaje: 'registro exitoso',
    datos:body
  })
})

router.put('/:id',(req,res) => {
  const {id} = req.params
  const body = req.body
  // const id = req.params.id
  res.json({
      mensaje: 'Registro actualizado',
      id,
      datos: body,
      size: servicioProducto.findAll.length
  });
});

router.patch('/:id', (req,res) => {
  const {id} = req.params
  const body = req.body
  res.json({
    mensaje: 'Registro parcialmente actualizado',
    id,
    datos:body
  })
})

router.delete('/:id', (req,res) => {
  const {id} = req.params
  servicioProducto.delete(id)
  res.json({
    mensaje: 'Registro eliminado',
    id
  })
})

module.exports = router
