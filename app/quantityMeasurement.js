console.log("Welcome Quantity Measurement");
class QuantityMeasurement {
    feetConverter(length) {
        return length * 12;
    }
    inchConverter(length) {
        return length;
    }
}
module.exports = new QuantityMeasurement;