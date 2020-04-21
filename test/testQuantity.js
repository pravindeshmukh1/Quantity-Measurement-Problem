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
    it('given value 0 Inch and 1 Inch Length if not equal should return true', function () {
        assert.notEqual(0, lengthMeasurement.inchConverter(1))
    })
    it('given value 0 Inch and null in Inch if null should return wrong value ', function () {
        assert.isNull(null, lengthMeasurement.inchConverter(0))
    })
    it('given value Inch should return type as number ', function () {
        assert.typeOf(lengthMeasurement.inchConverter(0), 'Number')
    })
    it('given value 1 Ft and 1 Inch if not equal should return true', function () {
        assert.notEqual(lengthMeasurement.feetConverter(1), lengthMeasurement.inchConverter(1))
    })
    it('given value 1 Inch and 1 Feet if not equal should return true', function () {
        assert.notEqual(lengthMeasurement.inchConverter(1), lengthMeasurement.feetConverter(1))
    })
    it('given value 1 Feet and 12 Inch if not equal should return true', function () {
        assert.equal(lengthMeasurement.feetConverter(1), lengthMeasurement.inchConverter(12))
    })
    it('given 3 Feet and 1 Yard if equal should return true', function () {
        assert.equal(lengthMeasurement.feetConverter(3), lengthMeasurement.yardConvertor(1))
    })
    it('given 1 Feet and 1 Yard if not equal should return true', function () {
        assert.notEqual(lengthMeasurement.feetConverter(1), lengthMeasurement.yardConvertor(1))
    })
    it('given 1 Inch and 1 Yard if not equal should return true', function () {
        assert.notEqual(lengthMeasurement.inchConverter(1), lengthMeasurement.yardConvertor(1))
    })
    it('given 1 Yard and 36 Inch if equal should return true', function () {
        assert.equal(lengthMeasurement.yardConvertor(1), lengthMeasurement.inchConverter(36))
    })
    it('given 36 Inch and 1 Yard if equal should return true', function () {
        assert.equal(lengthMeasurement.inchConverter(36), lengthMeasurement.yardConvertor(1))
    })
})