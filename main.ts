radio.onReceivedNumber(function (receivedNumber) {
    no_of_people += -1
    basic.showNumber(no_of_people)
    if (no_of_people >= 5) {
        basic.showIcon(IconNames.No)
        soundExpression.giggle.playUntilDone()
    } else {
        basic.showNumber(no_of_people)
    }
})
radio.onReceivedString(function (receivedString) {
    no_of_people += 1
    basic.showNumber(no_of_people)
    if (no_of_people > 5) {
        basic.showIcon(IconNames.No)
        soundExpression.giggle.playUntilDone()
    } else {
        basic.showNumber(no_of_people)
    }
})
let no_of_people = 0
radio.setGroup(25)
