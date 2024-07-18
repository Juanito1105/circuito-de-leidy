let pais_aleatorio = 0
let seleccion = 0
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    pais_aleatorio = randint(1, 7)
    if (pais_aleatorio == 1) {
        basic.showString("Colombia")
    }
    if (pais_aleatorio == 2) {
        basic.showString("Brasil")
    }
    if (pais_aleatorio == 3) {
        basic.showString("Suiza")
    }
    if (pais_aleatorio == 4) {
        basic.showString("Canada")
    }
    if (pais_aleatorio == 5) {
        basic.showString("China")
    }
    if (pais_aleatorio == 6) {
        basic.showString("Rusia")
    }
    if (pais_aleatorio == 7) {
        basic.showString("Italia")
    }
})
basic.forever(function () {
    if (pais_aleatorio == 0) {
        if (input.pinIsPressed(TouchPin.P0) || (input.pinIsPressed(TouchPin.P1) || input.pinIsPressed(TouchPin.P2))) {
            if (input.pinIsPressed(TouchPin.P0) && (input.pinIsPressed(TouchPin.P1) && !(input.pinIsPressed(TouchPin.P2)))) {
                seleccion = 2
            }
            if (input.pinIsPressed(TouchPin.P2) && (!(input.pinIsPressed(TouchPin.P1)) && input.pinIsPressed(TouchPin.P0))) {
                seleccion = 2
            }
            if (input.pinIsPressed(TouchPin.P2) && (!(input.pinIsPressed(TouchPin.P1)) && !(input.pinIsPressed(TouchPin.P0)))) {
                seleccion = 4
            }
            if (input.pinIsPressed(TouchPin.P1) && (!(input.pinIsPressed(TouchPin.P0)) && !(input.pinIsPressed(TouchPin.P2)))) {
                seleccion = 5
            }
            if (input.pinIsPressed(TouchPin.P1) && (input.pinIsPressed(TouchPin.P0) && input.pinIsPressed(TouchPin.P2))) {
                seleccion = 6
            }
            if (input.pinIsPressed(TouchPin.P0) && (!(input.pinIsPressed(TouchPin.P1)) && !(input.pinIsPressed(TouchPin.P2)))) {
                seleccion = 7
            }
            if (input.pinIsPressed(TouchPin.P1) && (input.pinIsPressed(TouchPin.P2) && !(input.pinIsPressed(TouchPin.P0)))) {
                seleccion = 3
            }
        }
    }
    if (pais_aleatorio == seleccion) {
        pais_aleatorio = 0
        seleccion = 0
        basic.showIcon(IconNames.Happy)
        basic.pause(3000)
    } else {
        pais_aleatorio = 0
        seleccion = 0
        basic.showIcon(IconNames.Sad)
        basic.pause(3000)
    }
})
