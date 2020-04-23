var assert = require(`chai`).assert;
var volumeMeasurement = require(`../app/volume`);

describe(`Testing for Volume Measurement`, function () {
    it(`given 1 Gallon and 3.78 litre if equal should return true`, function () {
        assert.equal(volumeMeasurement.gallonConverter(1), volumeMeasurement.litreConverter(3.78))
    })
    it(`given 1 Litre and 1000 Millimeter if equal should return true`, function () {
        assert.equal(volumeMeasurement.litreConverter(1), volumeMeasurement.millimeterConverter(1000))
    })
    it(`given value 1 Gallon and 3.78 Litre then should return Additon of them`, function () {
        var volume1 = volumeMeasurement.gallonConverter(1)
        var volume2 = volumeMeasurement.litreConverter(3.78)
        var result = volumeMeasurement.addVolume(volume1, volume2)
        assert.equal(result, 7.56)
    })
    it(`given value 1 Litre and 1000 Millimeter then should return Additon of them`, function () {
        var volume1 = volumeMeasurement.litreConverter(1)
        var volume2 = volumeMeasurement.millimeterConverter(1000)
        var result = volumeMeasurement.addVolume(volume1, volume2)
        assert.equal(result, 2)
    })
})