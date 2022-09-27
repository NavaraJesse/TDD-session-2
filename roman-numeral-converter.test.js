const assert = require("assert");

function convert(number) {
    return "I";
}

describe("The roman converter", () => {
    it("should convert 1 to I", () => {
        assert.strictEqual(convert(1),"I")
    })
})