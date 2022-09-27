const assert = require("assert");
const sell = require("../product-sold-restock-alert")

describe("Product sold - Restock Alert", () => {
    it("should send an alert when a sale is made that takes a product beyond its restock level", () => {
        const event = {
            productId: 811,
            quantity: 1
        }

        function getProduct(productId) {
            return { stock: 25 }
        }

        function calculateRestockLevel(productId) {
            return 24
        }

        assert.deepEqual(sell(event, getProduct, calculateRestockLevel), { alert: true })
    })
    it("should send no alert when a sale is made that does not take a product beyond its restock level", () => {
        const event = {
            productId: 811,
            stock: 26,
            restockLevel: 24,
            quantity: 1
        }

        function getProduct(productId) {
            return { stock: 26 }
        }

        function calculateRestockLevel(productId) {
            return 24
        }

        assert.deepEqual(sell(event, getProduct, calculateRestockLevel), { alert: false })
    })
})