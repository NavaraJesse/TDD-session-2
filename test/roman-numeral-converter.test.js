const assert = require("assert");
const convert = require("../roman-numeral-converter");

describe("The roman converter", () => {
    [
        {
            integer: 1,
            romanNumeral: "I"
        },
        {
            integer: 2,
            romanNumeral: "II"
        },
        {
            integer: 3,
            romanNumeral: "III"
        },
        {
            integer: 4,
            romanNumeral: "IV"
        },
        {
            integer: 5,
            romanNumeral: "V"
        },
        {
            integer: 6,
            romanNumeral: "VI"
        },
        {
            integer: 7,
            romanNumeral: "VII"
        },
        {
            integer: 8,
            romanNumeral: "VIII"
        },
        {
            integer: 9,
            romanNumeral: "IX"
        },
        {
            integer: 10,
            romanNumeral: "X"
        },
        {
            integer: 11,
            romanNumeral: "XI"
        },
        {
            integer: 14,
            romanNumeral: "XIV"
        },
        {
            integer: 15,
            romanNumeral: "XV"
        },
        {
            integer: 16,
            romanNumeral: "XVI"
        },
        {
            integer: 19,
            romanNumeral: "XIX"
        },
        {
            integer: 20,
            romanNumeral: "XX"
        }
    ].forEach(({integer, romanNumeral}) => {
        it(`should convert ${integer} to ${romanNumeral}`,
            () => {
                assert.strictEqual(convert(integer), romanNumeral);
            })
    })
})
