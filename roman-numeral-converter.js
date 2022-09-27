function convert(number) {
    switch (number) {
        case 4:
            return "IV"
        default:
            return "I".repeat(number)
    }
}

module.exports = convert
