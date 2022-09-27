
function sell(event, getProduct, calculateRestockLevel) {
    if(calculateRestockLevel(event.productId) >= (getProduct().stock - event.quantity))
        return { alert: true };
    return { alert: false }
}

module.exports = sell