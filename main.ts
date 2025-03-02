let tal = 0
basic.forever(function () {
    if (input.acceleration(Dimension.Z) < -1000) {
        tal += 1
        basic.showNumber(tal)
    }
})
