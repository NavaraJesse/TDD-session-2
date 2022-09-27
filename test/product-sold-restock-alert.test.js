const assert = require("assert");
const sell = require("../product-sold-restock-alert")

describe("Product sold - Restock Alert", () => {
    it("should send an alert when a sale is made that takes a product beyond its restock level", () => {
        const event = {
            productId: 811,
            quantity: 1
        }

        assert.deepEqual(sell(event), { alert: true })
    })
})