import Producto from './Producto.js'

class Servicio extends Producto {

    constructor(nombre, precio, cantidad) {
        super();
        this._nombre=nombre;
        this._precio=precio;
        this._cantidad=cantidad;
    }
    
    estaDisponible(cantidad) {
        return (cantidad <= this._cantidad) ? true : false;
    }

    calcularTarifa() {
        let total = this._precio;
        return total;
    }

}

module.exports = Servicio;