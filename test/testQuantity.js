var assert = require('chai').assert;
var lengthMeasurement = require('../app/quantityMeasurement');

describe('Testing for Length Check', function () {
    it('given value 0 Ft and 0 Ft Length if equal should return true', function () {
        assert.equal(0, lengthMeasurement.feetConverter(0))
    })
    it('given value 0 Ft and 1 Ft Length if equal should return not true', function () {
        assert.notEqual(0, lengthMeasurement.feetConverter(1))
    })
    it('given value 0 Ft and null Length if equal should return null', function () {
        assert.notEqual(null, lengthMeasurement.feetConverter(0))
    })
    it('given value Ft should return type as number ', function () {
        assert.typeOf(lengthMeasurement.feetConverter(0), 'Number')
    })
    it('given value 0 Inch and 0 Inch Length if equal should return true', function () {
        assert.equal(0, lengthMeasurement.inchConverter(0))
    })
})
