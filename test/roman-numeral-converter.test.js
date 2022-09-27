const assert = require("assert");
const convert = require("../roman-numeral-converter");

describe("The roman converter", () => {
    it("should convert 1 to I", () => {
        assert.strictEqual(convert(1),"I")
    })
})
