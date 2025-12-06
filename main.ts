/**
 * Notes:
 * 
 * The Blueberry OS will contain 6 apps:
 * 
 * # Mail
 * 
 * # Game
 * 
 * # Mood Swinger
 * 
 * # Duck Hop
 * 
 * # Dice
 * 
 * # Alarm
 * 
 * Press 1 To Select
 * 
 * HOW TO USE MAIL:
 * 
 * PRESS B TO LAUNCH THE APP WHEN ON THE SCREEN.
 * 
 * PRESS P1 TO TOGGLE THE RADIO GROUP
 * 
 * PRESS P0 TO SELECT THE RADIO GROUP
 * 
 * PRESS P2 TO TOGGLE THE MESSAGE
 * 
 * PRESS P0 AGAIN TO SEND THE MESSAGE TO ANOTHER DEVICE ON THE SAME GROUP.
 */
/**
 * FINAL PROJECT 12/2/25
 * 
 * Made by Alex Manochio
 * 
 * Based on inspiration from the Tiniest OS in the world
 */
/**
 * Button A (Apps Toggle)
 */
/**
 * Select Apps Pin
 * 
 * & Application Runtime
 */
/**
 * Button B
 * 
 * Apps Toggle
 */
/**
 * Mail Pins
 */
/**
 * Message Recieving Block
 */
input.onPinPressed(TouchPin.P0, function () {
    if (app_menu_pos == 0 + 1) {
        basic.clearScreen()
        basic.showString("SELECTED GROUP")
        basic.showString("" + (radio_group))
        SELECTED_JOIN_TEXT_RADIO_MAIL = 1
        basic.showString("MESSAGE SELECT USING P2. P0 DONE")
    }
    if (SELECTED_JOIN_TEXT_RADIO_MAIL == 0 + 1) {
        if (MESSAGE_TOGGLE_FEATURE == 0 + 1) {
            radio.sendString("Hi!")
            basic.showIcon(IconNames.Yes)
        }
        if (MESSAGE_TOGGLE_FEATURE == 0 + 2) {
            radio.sendString("Okay")
            basic.showIcon(IconNames.Yes)
        }
        if (MESSAGE_TOGGLE_FEATURE == 0 + 3) {
            radio.sendString("I'm Coming")
            basic.showIcon(IconNames.Yes)
        }
        if (MESSAGE_TOGGLE_FEATURE == 0 + 4) {
            radio.sendString("Bye")
            basic.showIcon(IconNames.Yes)
        }
        if (MESSAGE_TOGGLE_FEATURE == 0 + 5) {
            radio.sendString("Help")
            basic.showIcon(IconNames.Yes)
        }
    }
})
input.onButtonPressed(Button.A, function () {
    if (isbuttonsaccessible == 0 + 1) {
        app_menu_pos += 1
        basic.pause(1000)
        if (app_menu_pos == 0 + 1) {
            basic.showLeds(`
                # # # # #
                # # . # #
                # . # . #
                # . . . #
                # # # # #
                `)
        }
        if (app_menu_pos == 0 + 2) {
            basic.showLeds(`
                . # # # .
                # # # # #
                # # # # #
                . # # # .
                . # # # .
                `)
        }
        if (app_menu_pos == 0 + 3) {
            basic.showIcon(IconNames.Angry)
        }
        if (app_menu_pos == 0 + 4) {
            basic.showIcon(IconNames.Duck)
        }
        if (app_menu_pos == 0 + 5) {
            basic.showLeds(`
                # # . # #
                # # . # #
                . . . . .
                # # . # #
                # # . # #
                `)
        }
        if (app_menu_pos == 0 + 6) {
            basic.showLeds(`
                # # # # #
                # . # . #
                # # . . #
                # . # . #
                # # # # #
                `)
        }
        if (app_menu_pos == 0 + 7) {
            app_menu_pos = 0
        }
    } else {
    	
    }
})
input.onPinPressed(TouchPin.P2, function () {
    if (SELECTED_JOIN_TEXT_RADIO_MAIL == 0 + 1) {
        app_menu_pos = 500
        MESSAGE_TOGGLE_FEATURE += 1
        if (MESSAGE_TOGGLE_FEATURE == 0 + 1) {
            basic.showString("Hi!")
        }
        if (MESSAGE_TOGGLE_FEATURE == 0 + 2) {
            basic.showString("Ok")
        }
        if (MESSAGE_TOGGLE_FEATURE == 0 + 3) {
            basic.showString("I'm coming")
        }
        if (MESSAGE_TOGGLE_FEATURE == 0 + 4) {
            basic.showString("Bye")
        }
        if (MESSAGE_TOGGLE_FEATURE == 0 + 5) {
            basic.showString("Help")
        }
    }
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
input.onButtonPressed(Button.B, function () {
    if (isbuttonsaccessible == 0 + 1) {
        app_menu_pos += 0
        basic.pause(0)
        basic.clearScreen()
        if (app_menu_pos == 0 + 1) {
            basic.showString("SELECT 1 TO 5 USE P1 TOGGLE")
        }
        if (app_menu_pos == 0 + 2) {
            basic.showString("PRESS BUTTON B TO CLICK!")
            IS_CLICK_GAME_ENABLED = 1
            if (IS_CLICK_GAME_ENABLED == 0 + 0) {
                CLICK_GAME_VAR += 1
                basic.showString("" + (CLICK_GAME_VAR))
            } else {
                IS_CLICK_GAME_ENABLED = 0
            }
        }
        if (app_menu_pos == 0 + 3) {
        	
        }
        if (app_menu_pos == 0 + 4) {
        	
        }
        if (app_menu_pos == 0 + 5) {
        	
        }
    } else {
    	
    }
    if (CLICK_GAME == 0 + 1) {
        basic.showString("" + (CLICK_GAME_VAR))
    }
})
input.onPinPressed(TouchPin.P1, function () {
    if (app_menu_pos == 0 + 1) {
        basic.clearScreen()
        radio_group += 1
        radio.setGroup(radio_group)
        basic.showString("" + (radio_group))
    }
    if (radio_group > 4) {
        radio_group = 0
    }
})
/**
 * Shake Logic
 */
input.onGesture(Gesture.Shake, function () {
    if (isbuttonsaccessible == 0 + 1) {
        basic.showIcon(IconNames.Chessboard)
    } else {
    	
    }
})
/**
 * Radio group is set to 0 for channel messaging (1-5)
 */
let IS_CLICK_GAME_ENABLED = 0
let SELECTED_JOIN_TEXT_RADIO_MAIL = 0
let MESSAGE_TOGGLE_FEATURE = 0
let isbuttonsaccessible = 0
let app_menu_pos = 0
let CLICK_GAME_VAR = 0
let radio_group = 0
let CLICK_GAME = 0
music.setVolume(127)
CLICK_GAME = 0
radio_group = 0
CLICK_GAME_VAR = 0
let select_app_pos = 0
app_menu_pos = 0
isbuttonsaccessible = 0
MESSAGE_TOGGLE_FEATURE = 0
SELECTED_JOIN_TEXT_RADIO_MAIL = 0
IS_CLICK_GAME_ENABLED = 0
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `)
basic.showLeds(`
    # . . . .
    # . . . .
    # . . . .
    # . . . .
    # . . . .
    `)
basic.showLeds(`
    # # . . .
    # # . . .
    # # . . .
    # # . . .
    # # . . .
    `)
basic.showLeds(`
    # # # . .
    # # # . .
    # # # . .
    # # # . .
    # # # . .
    `)
basic.showLeds(`
    # # # # .
    # # # # .
    # # # # .
    # # # # .
    # # # # .
    `)
for (let index = 0; index < 4; index++) {
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
}
basic.showLeds(`
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    `)
basic.showLeds(`
    # # # # .
    . # # # #
    # # # # #
    . # # . #
    # # # # #
    `)
basic.showLeds(`
    # # # # .
    . # . # #
    # . # # #
    . # # . #
    # . # # .
    `)
basic.showLeds(`
    # . # . .
    . # . # #
    # . # # .
    . # . . #
    # . # # .
    `)
basic.showLeds(`
    # . # . .
    . # . . #
    # . # . .
    . # . . #
    # . # # .
    `)
basic.showLeds(`
    # . . . .
    . # . . #
    . . # . .
    . . . . #
    # . # . .
    `)
basic.showLeds(`
    # . . . .
    . . . . .
    . . . . .
    . . . . .
    # . # . .
    `)
isbuttonsaccessible = 1
basic.showLeds(`
    . . # . .
    . # . # .
    # . # . #
    # . . . #
    . # # # .
    `)
isbuttonsaccessible = 1
