var assert = require('assert');
var expect = require('chai').expect;
var should = require('chai').should();

import Venta from '../Venta.js';
import Articulo from '../Articulo.js';

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




});