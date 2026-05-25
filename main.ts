
input.onButtonPressed(Button.A, function() {
    basic.showIcon(IconNames.Chessboard)
    basic.pause(1000 * randint(5, 15))
    basic.showIcon(IconNames.Skull)
})