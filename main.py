def on_button_pressed_a():
    maqueen.motor_run(maqueen.Motors.M1, maqueen.Dir.CW, 100)
    maqueen.motor_run(maqueen.Motors.M2, maqueen.Dir.CW, 100)

input.on_button_pressed(Button.A, on_button_pressed_a)
while True:
    a=maqueen.ultrasonic(0)
    if a<5:
        maqueen.motor_stop(maqueen.Motors.ALL)
        maqueen.motor_stop(maqueen.Motors.M2)
        
        pass


    pass
