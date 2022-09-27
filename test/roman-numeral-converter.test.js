const assert = require("assert");
const convert = require("../roman-numeral-converter");

describe("The roman converter", () => {
    it("should convert 1 to I", () => {
        assert.strictEqual(convert(1),"I")
    })
    it("should convert 2 to II", () => {
        assert.strictEqual(convert(2), "II")
    })
})
