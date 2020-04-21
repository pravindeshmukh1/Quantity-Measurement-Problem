console.log("Welcome Quantity Measurement");
class QuantityMeasurement {
    feetConverter(length) {
        return length * 12;
    }
}
module.exports = new QuantityMeasurement;