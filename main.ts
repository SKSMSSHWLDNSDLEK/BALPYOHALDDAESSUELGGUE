let 외부온도 = 0
input.onButtonPressed(Button.AB, function () {
    if (Math.round(input.temperature()) <= 외부온도 + 5 && Math.round(input.temperature()) >= 외부온도 - 5) {
        basic.showString("safe")
    } else {
        basic.showString("warning")
    }
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    외부온도 = input.temperature()
    if (28 < Math.round(input.temperature())) {
        basic.showString("TOO HOT")
    }
    if (24 < Math.round(input.temperature()) && Math.round(input.temperature()) <= 28) {
        basic.showString("HOT")
    }
    if (18 <= Math.round(input.temperature()) && Math.round(input.temperature()) <= 24) {
        basic.showString("BEST")
    }
    if (14 <= Math.round(input.temperature()) && Math.round(input.temperature()) < 18) {
        basic.showString("COLD")
    }
    if (Math.round(input.temperature()) < 14) {
        basic.showString("TOO COLD")
    }
})
