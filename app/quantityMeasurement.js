console.log("Welcome Quantity Measurement");
class QuantityMeasurement {
    feetConverter(length) {
        return length * 12;
    }
    inchConverter(length) {
        return length;
    }
    yardConvertor(length) {
        return length * 36;
    }
}
module.exports = new QuantityMeasurement;