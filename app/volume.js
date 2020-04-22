class VolumeMeasurement {
    gallonConverter(volume) {
        return volume * 3.78
    }
    litreConverter(volume) {
        return volume
    }
    millimeterConverter(volume) {
        return volume / 1000
    }
}
module.exports = new VolumeMeasurement;