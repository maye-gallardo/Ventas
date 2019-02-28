var assert = require('assert');
var expect = require('chai').expect;

import Venta from '../Venta.js';

describe('Venta', function(){

    it ('Total de venta sin producto deberia ser 0', function(){
        let venta = new Venta();
        expect(venta.total()).equal(0);
    });

    it ('Deberia mostrar el total de un solo articulo de un consto de 100', function(){
        let venta = new Venta();
        venta.add();
        expect(venta.total(1)).equal(100);
    });

    
});