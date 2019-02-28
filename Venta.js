class Venta{
    
    constructor() {
        this.articulo = new Articulo();
        this.servicio = new Servicio();
        this.quantityArticles = 0;
        this.quantityServices = 0;

    }

    /*available(){
        
    }*/

    total() {
        return this.articulo.calculation(this.quantityArticles);
    }

    totalS() {
        return this.servicio.calculation(this.quantityServices);
    }

    add() {
        this.quantityArticles = this.quantityArticles + 1;
        this.quantityServices = this.quantityServices + 1;
    }
}


class Articulo{
    calculation(quantity) {
        return quantity * 100;
    }
    
}

class Servicio{
    calculation(quantity) {
        return quantity * 200;
    }
}

module.exports = Venta;
