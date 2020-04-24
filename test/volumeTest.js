var assert = require(`chai`).assert;
var volumeMeasurement = require(`../app/volume`);

describe(`Testing for Volume Measurement`, function () {
    //TC-Compare Different Volume Value 1 Gallon & 3.78 Litre
    it(`given 1 Gallon and 3.78 litre if equal should return true`, function () {
        assert.equal(volumeMeasurement.gallonConverter(1), volumeMeasurement.litreConverter(3.78))
    })
    //TC-Compare Different Volume Value 1 Litre & 1000 Millitre
    it(`given 1 Litre and 1000 Milliliter if equal should return true`, function () {
        assert.equal(volumeMeasurement.litreConverter(1), volumeMeasurement.milliliterConverter(1000))
    })
    //TC-Addition of Different Value in 1 Gallon & 3.78 Litre
    it(`given value 1 Gallon and 3.78 Litre then should return Additon of them`, function () {
        var volume1 = volumeMeasurement.gallonConverter(1)
        var volume2 = volumeMeasurement.litreConverter(3.78)
        var result = volumeMeasurement.addVolume(volume1, volume2)
        assert.equal(result, 7.56)
    })
      //TC-Addition of Different Value in 1 Litre & 1000 Milliliter
    it(`given value 1 Litre and 1000 Milliliter then should return Additon of them`, function () {
        var volume1 = volumeMeasurement.litreConverter(1)
        var volume2 = volumeMeasurement.milliliterConverter(1000)
        var result = volumeMeasurement.addVolume(volume1, volume2)
        assert.equal(result, 2)
    })
})