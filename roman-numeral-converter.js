function convert(number) {
    let result = "";
    while(number > 0) {
        if (number === 9) {
            return "IX"
        }
        if (number >= 5) {
            result = result + "V";
            number = number - 5
        }
        if (number === 4) {
            return "IV"
        }
        if (number > 0) {
            result = result + "I"
            number = number - 1
        }
    }
    return result
}

module.exports = convert
