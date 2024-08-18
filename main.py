def on_forever():
    # Bucle para detectar presiones de los botones A y B
    if input.button_is_pressed(Button.A):
        basic.show_string("A")
    elif input.button_is_pressed(Button.B):
        basic.show_string("B")
    else:
        basic.clear_screen()
basic.forever(on_forever)
