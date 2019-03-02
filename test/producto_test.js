var assert = require('assert');
var expect = require('chai').expect;
var should = require('chai').should();

import Articulo from '../Articulo.js';
import Servicio from '../Servicio.js';

describe('Producto',function () {

    it('Deberia de haber producto del tipo articulo disponibles',function () {
        let producto = new Articulo("silla", 1, 1, 5);
        expect(producto.estaDisponible(1)).equal(true);
    });

    it('No deberia de haber producto del tipo articulo disponibles',function () {
        let producto = new Articulo("globos", 1, 1, 5);
        expect(producto.estaDisponible(10)).equal(false);
    });

    it('Deberia de haber producto del tipo servicio disponibles',function () {
        let producto = new Servicio("local", 1, 2);
        expect(producto.estaDisponible(1)).equal(true);
    });

    it('No deberia de haber producto del tipo servicio disponibles',function () {
        let producto = new Servicio("sonido", 1, 1);
        expect(producto.estaDisponible(10)).equal(false);
    });

});