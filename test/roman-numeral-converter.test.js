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
        }
    ].forEach(({integer, romanNumeral}) => {
        it(`should convert ${integer} to ${romanNumeral}`,
            () => {
                assert.strictEqual(convert(integer), romanNumeral);
            })
    })
})
