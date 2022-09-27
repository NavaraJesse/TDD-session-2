const assert = require("assert");

function calculateRestockLevel(product, getSales) {
    return getSales(product.id) / 30 * product.leadTime;
}

describe("Restock level", () => {
    it("should calculate the restock level", () => {
        const product = { leadTime: 14, id: 811 }
        function getSales(productId) {
            return 15
        }
        assert.strictEqual(calculateRestockLevel(product, getSales), 7)
    })
})