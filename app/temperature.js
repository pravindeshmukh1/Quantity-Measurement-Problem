class TemperatureMeasurement {
    fahrenheitConverter = (temperature) => {
        return temperature
    }
    //Convert Celcius to Fahrenheit
    celsiusConverter = (temperature) => {
        let result = temperature * 9 / 5 + 32;
        return result;
    }
}
module.exports = new TemperatureMeasurement;