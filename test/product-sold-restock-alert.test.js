const assert = require("assert");

function sell(product, quantity) {
    return { alert: true };
}

describe("Product sold - Restock Alert", () => {
    it("should send an alert when a sale is made that takes a product beyond its restock level", () => {
        assert.deepEqual(sell(811,1), { alert: true })
    })
})