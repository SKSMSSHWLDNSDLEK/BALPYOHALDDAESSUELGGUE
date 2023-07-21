let 외부온도 = 0
input.onButtonPressed(Button.AB, function () {
    if (Math.round(input.temperature()) <= 외부온도 + 5 && Math.round(input.temperature()) >= 외부온도 - 5) {
        basic.showString("safe")
    } else {
        basic.showString("warning")
    }
})
input.onButtonPressed(Button.A, function () {
    if (24 <= input.temperature() && input.temperature() <= 26) {
        basic.showIcon(IconNames.Happy)
    }
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    외부온도 = input.temperature()
    if (18 <= Math.round(input.temperature()) && Math.round(input.temperature()) <= 32) {
        basic.showString("good")
    } else {
        if (18 > Math.round(input.temperature())) {
            basic.showString("too cold")
        }
        if (30 < Math.round(input.temperature())) {
            basic.showString("too hot")
        }
    }
})
