class WeightMeasurement {
    kilogramConverter = (mass) => { return mass };

    gramConverter = (mass) => { return mass / 1000 }

    tonneConverter = (mass) => { return mass * 1000 };

    addWeight = (mass1, mass2) => { return mass1 + mass2 };
}
module.exports = new WeightMeasurement;