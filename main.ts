basic.forever(function on_forever() {
    //  Bucle para detectar presiones de los botones A y B
    if (input.buttonIsPressed(Button.A)) {
        basic.showString("A")
    } else if (input.buttonIsPressed(Button.B)) {
        basic.showString("B")
    } else {
        basic.clearScreen()
    }
    
})
