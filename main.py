pais_aleatorio = 0
seleccion = 0

def on_button_pressed_a():
    global pais_aleatorio
    basic.clear_screen()
    pais_aleatorio = randint(1, 7)
    if pais_aleatorio == 1:
        basic.show_string("Colombia")
    if pais_aleatorio == 2:
        basic.show_string("Brasil")
    if pais_aleatorio == 3:
        basic.show_string("Suiza")
    if pais_aleatorio == 4:
        basic.show_string("Canada")
    if pais_aleatorio == 5:
        basic.show_string("China")
    if pais_aleatorio == 6:
        basic.show_string("Rusia")
    if pais_aleatorio == 7:
        basic.show_string("Italia")
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_forever():
    global seleccion, pais_aleatorio
    if pais_aleatorio == 0:
        if input.pin_is_pressed(TouchPin.P0) or (input.pin_is_pressed(TouchPin.P1) or input.pin_is_pressed(TouchPin.P2)):
            if input.pin_is_pressed(TouchPin.P0) and (input.pin_is_pressed(TouchPin.P1) and not (input.pin_is_pressed(TouchPin.P2))):
                seleccion = 2
            if input.pin_is_pressed(TouchPin.P2) and (not (input.pin_is_pressed(TouchPin.P1)) and input.pin_is_pressed(TouchPin.P0)):
                seleccion = 2
            if input.pin_is_pressed(TouchPin.P2) and (not (input.pin_is_pressed(TouchPin.P1)) and not (input.pin_is_pressed(TouchPin.P0))):
                seleccion = 4
            if input.pin_is_pressed(TouchPin.P1) and (not (input.pin_is_pressed(TouchPin.P0)) and not (input.pin_is_pressed(TouchPin.P2))):
                seleccion = 5
            if input.pin_is_pressed(TouchPin.P1) and (input.pin_is_pressed(TouchPin.P0) and input.pin_is_pressed(TouchPin.P2)):
                seleccion = 6
            if input.pin_is_pressed(TouchPin.P0) and (not (input.pin_is_pressed(TouchPin.P1)) and not (input.pin_is_pressed(TouchPin.P2))):
                seleccion = 7
            if input.pin_is_pressed(TouchPin.P1) and (input.pin_is_pressed(TouchPin.P2) and not (input.pin_is_pressed(TouchPin.P0))):
                seleccion = 3
    if pais_aleatorio == seleccion:
        pais_aleatorio = 0
        seleccion = 0
        basic.show_icon(IconNames.HAPPY)
        basic.pause(3000)
    else:
        pais_aleatorio = 0
        seleccion = 0
        basic.show_icon(IconNames.SAD)
        basic.pause(3000)
basic.forever(on_forever)
