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
    centimeterConverter(length) {
        return Math.ceil(length * 0.3937);
    }
    addLength(length, length1) {
        return length + length1;
    }
}
module.exports = new QuantityMeasurement;