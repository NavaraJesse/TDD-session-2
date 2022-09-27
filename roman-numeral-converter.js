function convert(number) {
    switch (number) {
        case 4:
            return "IV"
        case 5:
            return "V"
        default:
            return "I".repeat(number)
    }
}

module.exports = convert
