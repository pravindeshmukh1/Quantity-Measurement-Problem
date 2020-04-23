var assert = require(`chai`).assert
var weightMeasurement = require(`../app/weight`);

describe(`Testing for Weight Measurement`, function () {
    it(`given 1 Kg and 1000 Gram if equal should return true`, function () {
        assert.equal(weightMeasurement.kilogramConverter(1), weightMeasurement.gramConverter(1000))
    })
    it(`given 1 Tonne and 1000 Kg if equal should return true`, function () {
        assert.equal(weightMeasurement.tonneConverter(1), weightMeasurement.kilogramConverter(1000))
    })
    it(`given value 1 Tonne and 1000 Gram then should return Additon of them`, function () {
        var mass1 = weightMeasurement.tonneConverter(1)
        var mass2 = weightMeasurement.gramConverter(1000)
        var result = weightMeasurement.addWeight(mass1, mass2)
        assert.equal(result, 1001)
    })
})