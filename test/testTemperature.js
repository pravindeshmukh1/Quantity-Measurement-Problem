var assert = require(`chai`).assert
var temperatureMeasurement = require(`../app/temperature`);

describe(`Testing for Temperature Measurement`, function () {
    it(`given value 212 Fahrenheit and 100 Celsius if equal should return true`, function () {
        assert.equal(temperatureMeasurement.fahrenheitConverter(212), temperatureMeasurement.celsiusConverter(100))
    })
})