class Venta {
    
    constructor() {
        this.articulo = new Articulo();
        this.quantityArticles = 0;
    }

    total() {
        return this.articulo.calculation(this.quantityArticles);
    }

    add() {
        this.quantityArticles = this.quantityArticles + 1;
    }
}


class Articulo{
    calculation(quantity) {
        return quantity * 100;
    }
}
module.exports = Venta;