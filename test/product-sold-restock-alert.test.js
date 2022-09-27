const assert = require("assert");
const sell = require("../product-sold-restock-alert")

describe("Product sold - Restock Alert", () => {
    it("should send an alert when a sale is made that takes a product beyond its restock level", () => {
        const event = {
            productId: 811,
            quantity: 1
        }

        function getProduct(productId) {
            return {stock: 25}
        }

        function calculateRestockLevel(productId) {
            return 24
        }

        const messageSender = {
            sendAlert(message) {
                this.sentMessage = message
            }
        };

        sell(event, getProduct, calculateRestockLevel, messageSender)

        assert.deepEqual(messageSender.sentMessage, `Please order more of ${event.productId}`)
    })
    it("should send no alert when a sale is made that does not take a product beyond its restock level", () => {
        const event = {
            productId: 811,
            quantity: 1
        }

        function getProduct(productId) {
            return {stock: 26}
        }

        function calculateRestockLevel(productId) {
            return 24
        }

        const messageSender = {
            sendAlert() {
                this.sentMessage = undefined
            }
        }

        sell(event, getProduct, calculateRestockLevel, messageSender)

        assert.deepEqual(messageSender.sentMessage, undefined)
    })
})