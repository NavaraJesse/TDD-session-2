
function sell(event) {
    if(event.restockLevel >= (event.stock - event.quantity))
        return { alert: true };
    return { alert: false }
}

module.exports = sell