
function sell(event, getProduct, calculateRestockLevel, messageSender) {
    const product = getProduct(event.productId);
    if(calculateRestockLevel(product) >= (product.stock - event.quantity))
        messageSender.sendAlert(`Please order more of ${event.productId}`)
}

module.exports = sell