input.onButtonPressed(Button.A, function () {
    ENTRY = "" + ENTRY + "A"
})
input.onButtonPressed(Button.AB, function () {
    if (ENTRY == PASSWORD) {
        servos.P0.setAngle(90)
        basic.showIcon(IconNames.Happy)
        music.play(music.stringPlayable("E B C5 A B G A F ", 120), music.PlaybackMode.UntilDone)
    } else {
        servos.P0.setAngle(0)
        basic.showIcon(IconNames.No)
    }
    basic.clearScreen()
    ENTRY = ""
})
input.onButtonPressed(Button.B, function () {
    ENTRY = "" + ENTRY + "B"
})
input.onGesture(Gesture.Shake, function () {
    basic.showString(ENTRY)
})
let ENTRY = ""
let PASSWORD = ""
PASSWORD = "ABA"
ENTRY = ""
