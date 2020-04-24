var assert = require(`chai`).assert;
var lengthMeasurement = require(`../app/length`);

describe(`Testing for Length Measurement`, function () {
    //TC-Compare Same Feet Value 0
    it(`given value 0 Feet and 0 Feet Length if equal should return true`, function () {
        assert.equal(0, lengthMeasurement.feetConverter(0))
    })
    //TC-Compare Different Feet Value 0 Feet & 1 Feet
    it(`given value 0 Feet and 1 Feet Length if equal should return not true`, function () {
        assert.notEqual(0, lengthMeasurement.feetConverter(1))
    })
    //TC-Compare Null Value
    it(`given value 0 Feet and null Length if equal should return null`, function () {
        assert.notEqual(null, lengthMeasurement.feetConverter(0))
    })
    //TC-Compare Same Refrance Type
    it(`given value Feet should return type as number `, function () {
        assert.typeOf(lengthMeasurement.feetConverter(0), `Number`)
    })
    //TC-Compare Same Inch Value 0
    it(`given value 0 Inch and 0 Inch Length if equal should return true`, function () {
        assert.equal(0, lengthMeasurement.inchConverter(0))
    })
    //TC-Compare Different Value 0 Inch and 1 Inch
    it(`given value 0 Inch and 1 Inch Length if not equal should return true`, function () {
        assert.notEqual(0, lengthMeasurement.inchConverter(1))
    })
    //TC-Compare Null Value
    it(`given value 0 Inch and null in Inch if null should return wrong value `, function () {
        assert.isNull(null, lengthMeasurement.inchConverter(0))
    })
    //TC-Compare Same Refrance Type
    it(`given value Inch should return type as number `, function () {
        assert.typeOf(lengthMeasurement.inchConverter(0), `Number`)
    })
    //TC-Compare Different Value in 1 Feet & 1 Inch
    it(`given value 1 Feet and 1 Inch if not equal should return true`, function () {
        assert.notEqual(lengthMeasurement.feetConverter(1), lengthMeasurement.inchConverter(1))
    })
    //TC-Compare Different Value in 1 Inch & 1 Feet
    it(`given value 1 Inch and 1 Feet if not equal should return true`, function () {
        assert.notEqual(lengthMeasurement.inchConverter(1), lengthMeasurement.feetConverter(1))
    })
    //TC-Compare Different Value in 1 Feet & 12 Inch
    it(`given value 1 Feet and 12 Inch if not equal should return true`, function () {
        assert.equal(lengthMeasurement.feetConverter(1), lengthMeasurement.inchConverter(12))
    })
    //TC-Compare Different Value in 3 Feet & 1 Yard
    it(`given 3 Feet and 1 Yard if equal should return true`, function () {
        assert.equal(lengthMeasurement.feetConverter(3), lengthMeasurement.yardConvertor(1))
    })
    //TC-Compare Different Value in 1 Feet & 1 Yard
    it(`given 1 Feet and 1 Yard if not equal should return true`, function () {
        assert.notEqual(lengthMeasurement.feetConverter(1), lengthMeasurement.yardConvertor(1))
    })
    //TC-Compare Different Value in 1 Inch & 1 Yard
    it(`given 1 Inch and 1 Yard if not equal should return true`, function () {
        assert.notEqual(lengthMeasurement.inchConverter(1), lengthMeasurement.yardConvertor(1))
    })
    //TC-Compare Different Value in 1 Yard & 36 Inche
    it(`given 1 Yard and 36 Inch if equal should return true`, function () {
        assert.equal(lengthMeasurement.yardConvertor(1), lengthMeasurement.inchConverter(36))
    })
    //TC-Compare Different Value in 36 Inch & 1 Yard
    it(`given 36 Inch and 1 Yard if equal should return true`, function () {
        assert.equal(lengthMeasurement.inchConverter(36), lengthMeasurement.yardConvertor(1))
    })
    //TC-Compare Different Value in 1 Yard & 3 Feet
    it(`given 1 Yard and 3 Feet if equal should return true`, function () {
        assert.equal(lengthMeasurement.yardConvertor(1), lengthMeasurement.feetConverter(3))
    })
    //TC-Compare Different Value in 2 Inch & 5 Centimeter
    it(`given 2 Inch and 5 Cm if equal should return true`, function () {
        assert.equal(lengthMeasurement.inchConverter(2), lengthMeasurement.centimeterConverter(5))
    })
    //TC-Addition of Different Value in 2 Inch & 2 Inch
    it(`given value 2 Inch and 2 Inch then should return Additon of them`, function () {
        var length1 = lengthMeasurement.inchConverter(2)
        var length2 = lengthMeasurement.inchConverter(2)
        var result = lengthMeasurement.addLength(length1, length2)
        assert.equal(result, 4)
    })
    //TC-Addition of Different Value in 1 Feet & 2 Inch
    it(`given value 1 Feet and 2 Inch then should return Additon of them`, function () {
        var length1 = lengthMeasurement.feetConverter(1)
        var length2 = lengthMeasurement.inchConverter(2)
        var result = lengthMeasurement.addLength(length1, length2)
        assert.equal(result, 14)
    })
    //TC-Addition of Different Value in 1 Feet & 1 Feet
    it(`given value 1 Feet and 1 Feet then should return Additon of them`, function () {
        var length1 = lengthMeasurement.feetConverter(1)
        var length2 = lengthMeasurement.feetConverter(1)
        var result = lengthMeasurement.addLength(length1, length2)
        assert.equal(result, 24)
    })
    //TC-Addition of Different Value in 2 Inch & 2.5 Centimeter
    it(`given value 2 Inch and 2.5 Cm then should return Additon of them`, function () {
        var length1 = lengthMeasurement.inchConverter(2)
        var length2 = lengthMeasurement.centimeterConverter(2.5)
        var result = lengthMeasurement.addLength(length1, length2)
        assert.equal(result, 3)
    })
})