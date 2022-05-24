const faker = require('faker');

class ProductosServices {
  constructor() {
    this.productos = [];
    this.generarDatos();
  }
  generarDatos() {
    const size = 10;
    const limite = size || 5;
    for (let i = 0; i < limite; i++) {
      this.productos.push({
        id: faker.datatype.uuid(),
        nombre: faker.commerce.productName(),
        precio: parseInt(faker.commerce.price())
      })
    }
  }
  create(producto){
    producto.id = faker.datatype.uuid();
    this.productos.push(producto);
  }

  update(){

  }

  delete(id){
    for(let i = 0; i<this.productos.length; i++){
      if(this.findBy(id) == this.productos[i]){
        this.productos.splice(i,1)
        console.log("Se elimino")
        break
      }
      else{
        console.log("No se elimino")
      }
    };
  }
  findAll(){
    return this.productos
  }

  findBy(id){
    return this.productos.find(element => element.id === id)
  }
}

module.exports = ProductosServices;
