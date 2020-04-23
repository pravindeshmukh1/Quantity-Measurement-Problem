class TemperatureMeasurement {
    fahrenheitConverter = (temperature) => { return temperature };

    celsiusConverter = (temperature) => { return temperature * 9 / 5 + 32 };
}
module.exports = new TemperatureMeasurement;