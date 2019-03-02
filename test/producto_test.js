var assert = require('assert');
var expect = require('chai').expect;
var should = require('chai').should();

import Articulo from '../Articulo.js';


describe('Producto',function () {

    it('Deberia de haber producto del tipo articulo disponibles',function () {
        let producto = new Articulo("x", 1, 1, 5);
        expect(producto.estaDisponible(1)).equal(true);
    });

    

});