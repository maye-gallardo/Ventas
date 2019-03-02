class Venta{

    constructor() {
        this._productos = [];
        this._total = 0;
    }

    total() {
        return 0;
    }

    agregarProducto(producto) {
        this._productos.push(producto);
    }

 }

module.exports = Venta;
