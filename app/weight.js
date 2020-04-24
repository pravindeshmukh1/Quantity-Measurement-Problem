class WeightMeasurement {
    kilogramConverter = (mass) => {
        return mass
    }
    //Convert Gram to Kg
    gramConverter = (mass) => {
        let result = mass / 1000;
        return result;
    }
    //Convert Tonne to Grams
    tonneConverter = (mass) => {
        let result = mass * 1000;
        return result;
    }
    //Addtion of Weight
    addWeight = (mass1, mass2) => {
        let result = mass1 + mass2;
        return result;
    }
}
module.exports = new WeightMeasurement;