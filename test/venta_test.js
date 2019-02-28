var expect = require('chai').expect;
var should = require('chai').should();

import Venta from'../venta.js'

describe('Venta', function(){
    it('Total de venta sin producto deberia ser 0',function(){
        let venta = new Venta();
        expect(venta.total()).equal(0);
    });

    /*it('total de venta con un producto deberia devolver el total del producto',function(){
        let venta = new Venta();
        let pantalla = new Articulo("Pantalla SMS 17",100);
        venta.add(pantalla, 1);
        expect(venta.total()).equal(100);
    });

    it('total de venta con un servicio deberia devolver el total del producto',function(){
        let venta = new Venta();
        let mantenimiento = new Servicio("Pantalla SMS 17",15);
        venta.add(pantalla,1)
        venta.add(mantenimiento, 1);
        expect(venta.total()).equal(115);
    });*/
});