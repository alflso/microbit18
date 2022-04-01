let x = 0
let y = 0
let z = 0
function 이동방향측정 () {
    x = input.acceleration(Dimension.X)
    y = input.acceleration(Dimension.Y)
    z = input.acceleration(Dimension.Z)
}
function 스윙 () {
    if (y <= 0) {
        music.playTone(165, music.beat(BeatFraction.Whole))
    } else if (y > 0) {
        music.playTone(330, music.beat(BeatFraction.Whole))
    }
}
function 빠빠빠 () {
    if (z <= 0) {
        music.playTone(196, music.beat(BeatFraction.Whole))
    } else if (z > 0) {
        music.playTone(392, music.beat(BeatFraction.Whole))
    }
}
function 소리발생방법_결정 () {
    if (input.buttonIsPressed(Button.A)) {
        줄다리기()
    } else if (input.buttonIsPressed(Button.B)) {
        스윙()
    } else {
        빠빠빠()
    }
}
function 줄다리기 () {
    if (x <= 0) {
        music.playTone(131, music.beat(BeatFraction.Whole))
    } else if (x > 0) {
        music.playTone(262, music.beat(BeatFraction.Whole))
    }
}
basic.forever(function () {
    이동방향측정()
    소리발생방법_결정()
})
