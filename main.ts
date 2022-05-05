basic.forever(function () {
    if (smarthome.ReadLightIntensity(AnalogPin.P1) > 80) {
        pins.servoWritePin(AnalogPin.P2, 90)
    } else {
        pins.servoWritePin(AnalogPin.P2, 0)
    }
})
