function convert(number) {
    switch (number) {
        case 4:
            return "IV"
        case 5:
            return "V"
        case 6:
            return "VI"
        case 7:
            return "VII"
        default:
            return "I".repeat(number)
    }
}

module.exports = convert
