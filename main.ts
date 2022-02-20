let a: number;
input.onButtonPressed(Button.A, function on_button_pressed_a() {
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 100)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 100)
})
while (true) {
    a = maqueen.Ultrasonic(0)
    if (a < 5) {
        maqueen.motorStop(maqueen.Motors.All)
        maqueen.motorStop(maqueen.Motors.M2)
        
    }
    
    
}
