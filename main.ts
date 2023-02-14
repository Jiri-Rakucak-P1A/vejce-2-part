
let x = false

input.onButtonPressed(Button.A, function() {
    x = true
})

radio.onReceivedString(function(receivedString: string) {
    if (receivedString == "start?"){
        if (x = true){
        radio.sendString("start")
        }
        if (x = false) {
        radio.sendString("idk")
        }
    }

    if (receivedString == "odstartovat") {
        music.startMelody(music.builtInMelody(Melodies.Entertainer), MelodyOptions.Once)
        basic.showString("READY!")
        basic.pause(10)
        basic.showString("GO!")
        music.stopMelody(MelodyStopOptions.All)
    }
})