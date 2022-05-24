const express = require("express")

const productosRouter = require('./productos.route')
const categoriasRouter = require('./categorias.route')
const clientesRouter = require('./clientes.route')

function routing(app){
  const routes = express.Router()
  app.use('/api/ventas', routes)
  routes.use('/productos', productosRouter)
  routes.use('/categorias', categoriasRouter)
  routes.use('/clientes', clientesRouter)
}

module.exports = routing
