let start = 0
input.onButtonPressed(Button.A, function () {
    start = input.runningTime()
})
input.onButtonPressed(Button.B, function () {
    start = input.runningTime() - start
    basic.showNumber(start / 1000)
})
basic.forever(function () {
	
})
