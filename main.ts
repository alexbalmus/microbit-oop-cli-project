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

function onForever() 
{
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


// TODO: verificare supraîncărcare a funcțiilor (oficial nesuportată)
// class TestClass {
//     someMethod(stringParameter: string): void;
//     someMethod(numberParameter: number, stringParameter: string): void;

//     someMethod(stringOrNumberParameter: any, stringParameter?: string): void {
//         if (stringOrNumberParameter && typeof stringOrNumberParameter == "number")
//             console.log("Variant #2: numberParameter = " + stringOrNumberParameter + ", stringParameter = " + stringParameter);
//         else
//             console.log("Variant #1: stringParameter = " + stringOrNumberParameter);
//     }
// }

// let inst = new TestClass();

// inst.someMethod("bla");
// inst.someMethod(5, "blu");