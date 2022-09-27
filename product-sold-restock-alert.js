
function sell(event, getProduct, calculateRestockLevel, messageSender) {
    if(calculateRestockLevel(event.productId) >= (getProduct().stock - event.quantity))
        messageSender.sendAlert()
}

module.exports = sell