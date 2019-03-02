var assert = require('assert');
var expect = require('chai').expect;
var should = require('chai').should();

import Venta from '../Venta.js';
import Articulo from '../Articulo.js';
import Servicio from '../Servicio.js';


describe('Venta',function () {

    it('Si no vendo nada la ganancia deberia ser 0',function () {
        let venta = new Venta();
        expect(venta.total()).equal(0);
    });

    it('Si vendo  1 deberia ser 1',function () {
        let venta = new Venta();
        let producto = new Articulo("x", 1, 1, 5);
        venta.agregarProducto(producto);
        expect(venta.total()).equal(1);
    });

    it('Si no vendo nada la ganancia deberia ser 2',function () {
        let venta = new Venta();
        let producto = new Articulo("x", 1, 1, 5);
        let producto2 = new Servicio("x", 1, 5);
        venta.agregarProducto(producto);
        venta.agregarProducto(producto2);
        expect(venta.total()).equal(2);
    });


});