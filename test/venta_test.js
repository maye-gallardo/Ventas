var assert = require('assert');
var expect = require('chai').expect;
var should = require('chai').should();

import Venta from '../Venta.js';

describe('Venta',function () {

    it('Si no vendo nada la ganancia deberia ser 0',function () {
        let venta = new Venta();
        expect(venta.total()).equal(0);
    });


});