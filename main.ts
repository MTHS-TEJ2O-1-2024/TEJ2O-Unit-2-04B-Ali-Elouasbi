/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Ali
 * Created on: Sep 2024
 * This program says the temperature
*/

// our variable for a random number
let temperature = 0

basic.clearScreen()
basic.showIcon(IconNames.Happy)

input.onButtonPressed(Button.A, function () {
    temperature = input.temperature()
    basic.showString('Temp=')
    basic.showNumber(input.temperature())
})