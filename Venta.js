class Venta{

    constructor() {
        this._productos = [];
        this._total = 0;
    }

    total() {
        return this._productos.length;
    }

    agregarProducto(producto) {
        this._productos.push(producto);
    }

 }

module.exports = Venta;
