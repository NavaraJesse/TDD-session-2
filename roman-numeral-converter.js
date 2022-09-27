function convert(number) {
    let result = "";
    while(number > 0) {
        if (number >= 9) {
            result = result + "IX"
            number = number - 9
        }
        if (number >= 5) {
            result = result + "V";
            number = number - 5
        }
        if (number >= 4) {
            result = result + "IV"
            number = number - 4
        }
        if (number >= 1) {
            result = result + "I"
            number = number - 1
        }
    }
    return result
}

module.exports = convert
