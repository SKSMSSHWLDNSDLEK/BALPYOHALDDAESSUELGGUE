input.onButtonPressed(Button.A, function () {
    외부온도 = input.temperature()
    basic.showString("" + (외부온도))
})
input.onButtonPressed(Button.AB, function () {
    if (20 <= 실내온도 && 실내온도 <= 28) {
        if (Math.round(실내온도) <= 외부온도 + 5 && Math.round(실내온도) >= 외부온도 - 5) {
            basic.showString("SAFE")
            music.play(music.stringPlayable("C D E F G A B C5 ", 120), music.PlaybackMode.UntilDone)
        } else {
            basic.showString("WARNING")
        }
    } else if (20 > 실내온도) {
        basic.showString("COLD")
        music.play(music.tonePlayable(740, music.beat(BeatFraction.Breve)), music.PlaybackMode.UntilDone)
    } else {
        basic.showString("HOT")
        music.play(music.tonePlayable(740, music.beat(BeatFraction.Breve)), music.PlaybackMode.UntilDone)
    }
})
// 현재온도
input.onButtonPressed(Button.B, function () {
    실내온도 = input.temperature()
    basic.showString("" + (실내온도))
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    if (28 < Math.round(실내온도)) {
        basic.showString("HOT")
        music.play(music.tonePlayable(740, music.beat(BeatFraction.Breve)), music.PlaybackMode.UntilDone)
    }
    if (20 <= Math.round(실내온도) && Math.round(실내온도) <= 28) {
        basic.showString("GOOD")
        music.play(music.stringPlayable("C D E F G A B C5 ", 120), music.PlaybackMode.UntilDone)
    }
    if (Math.round(실내온도) < 20) {
        basic.showString("COLD")
        music.play(music.tonePlayable(740, music.beat(BeatFraction.Breve)), music.PlaybackMode.UntilDone)
    }
})
let 실내온도 = 0
let 외부온도 = 0
for (let index = 0; index < 1; index++) {
    music.play(music.stringPlayable("C E G C E G A A ", 120), music.PlaybackMode.UntilDone)
    music.play(music.stringPlayable("A G - F F F E E ", 120), music.PlaybackMode.UntilDone)
    music.play(music.stringPlayable("E D D D C C C C ", 120), music.PlaybackMode.UntilDone)
}
