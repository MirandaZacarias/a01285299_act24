input.onPinPressed(TouchPin.P0, function () {
    for (let index = 0; index < 15; index++) {
        basic.showLeds(`
            . . # . .
            . . # . .
            # # # # #
            # . . . #
            # . . . #
            `)
        basic.showLeds(`
            . . # . .
            . . # . .
            . . # . .
            # # # # #
            # . . . #
            `)
    }
    for (let index = 0; index < 15; index++) {
        basic.showLeds(`
            # . # . #
            . # # # .
            . . # . .
            . # . # .
            . # . # .
            `)
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . # . # .
            # . . . #
            `)
    }
})
input.onButtonPressed(Button.A, function () {
    x = 0
    y = 0
    for (let x = 0; x <= 4; x++) {
        led.plot(x, y)
        basic.pause(100)
        led.unplot(x, y)
        basic.pause(100)
    }
})
input.onGesture(Gesture.Shake, function () {
    counter = 0
    for (let counter = 0; counter <= 15; counter++) {
        basic.showLeds(`
            . # . # .
            . . . . .
            . # # # .
            . # # # .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
})
let counter = 0
let y = 0
let x = 0
for (let index = 0; index < 4; index++) {
    basic.showArrow(ArrowNames.North)
    basic.showArrow(ArrowNames.East)
    basic.showArrow(ArrowNames.South)
    basic.showArrow(ArrowNames.West)
}
basic.forever(function () {
	
})
