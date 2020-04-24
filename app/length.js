console.log(`Welcome Quantity Measurement`);
class LengthMeasurement {
    //Convert Feet to Inch
    feetConverter = (length) => {
        let result = length * 12;
        return result
    }

    inchConverter = (length) => {
        return length;
    }
    //Convert Yard to Inch
    yardConvertor = (length) => {
        let result = length * 36;
        return result;
    }
    //Convert Cm to Inch
    centimeterConverter = (length) => {
        let result = Math.ceil(length * 0.3937);
        return result;
    }
    //Addtion Lengths
    addLength = (length1, length2) => {
        let result = length1 + length2;
        return result
    }
}
module.exports = new LengthMeasurement;