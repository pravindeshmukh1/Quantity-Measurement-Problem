var assert = require('assert');
var lengthMeasurement = require('../app/quantityMeasurement');

describe('Testing for Length Check', function () {
    it('given value 0 Ft and 0 Ft Length if equal should return true', function () {
        let lengthMeasurementCheck = lengthMeasurement.checkLength(0, 0);
        assert.equal(true, lengthMeasurementCheck)
    })
    it('given value 0 Ft and 1 Ft Length if equal should return not true', function () {
        let lengthMeasurementCheck = lengthMeasurement.checkLength(0, 1);
        assert.notEqual(true, lengthMeasurementCheck)
    })
})
