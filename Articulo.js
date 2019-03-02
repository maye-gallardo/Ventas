import Producto from './Producto.js'

class Articulo extends Producto {

    constructor(nombre, precio, saldo, cantidad) {
        super();
        this._nombre=nombre;
        this._precio=precio;
        this._saldo=saldo;
        this._cantidad=cantidad;
    }
    
    estaDisponible(cantidad) {
        return (cantidad <= this._cantidad) ? true : false;
    }

    calcularTarifa() {
        let total = this._precio - this._saldo;
        return total;
    }

}
module.exports = Articulo;