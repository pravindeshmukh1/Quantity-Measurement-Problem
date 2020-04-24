class VolumeMeasurement {
    //Convert Gallon to Litre
    gallonConverter = (volume) => {
        let result = volume * 3.78
        return result;
    }

    litreConverter = (volume) => {
        return volume
    }
    //Convert Milliliter to Litre
    milliliterConverter = (volume) => {
        let result = volume / 1000;
        return result;
    }
    //Addtion of Volumes
    addVolume = (volume1, volume2) => {
        let result = volume1 + volume2
        return result;
    }
}
module.exports = new VolumeMeasurement;