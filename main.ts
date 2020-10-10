class Greeting 
{
    message: string;

    constructor(message: string) 
    {
        this.message = message;
    }
    
    public getMessage(): string 
    {
        return this.message;
    }
}

let hello = new Greeting("HI WORLD!");

basic.showLeds(`
    . # # # .
    # . . . #
    . # . # .
    # . . . #
    . # # # .
    `);

basic.pause(500);
basic.clearScreen();

function onForever() {
    basic.clearScreen();
    basic.showString("" + hello.getMessage());

    basic.showLeds(`
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        . . . . .
        `);
    
    basic.pause(500);
    basic.showIcon(IconNames.Heart);

    basic.showLeds(`
        . . . . .
        . # . # .
        . # # # .
        . . # . .
        . . . . .
        `);
    
    basic.showIcon(IconNames.Heart);

    basic.showLeds(`
        . . . . .
        . # . # .
        . # # # .
        . . # . .
        . . . . .
        `);
    
    basic.clearScreen();

    basic.showLeds(`
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        . . . . .
        `);
    
    basic.clearScreen();
}

basic.forever(onForever);
