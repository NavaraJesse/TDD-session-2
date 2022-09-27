function convert(number) {
    let result = "";
    const numbers = [9, 5, 4, 1]
    const romanNumerals = ["IX", "V", "IV", "I"]
    while(number > 0) {
        for(let i = 0; i < numbers.length; i++ ) {
            if (number >= numbers[i]) {
                result = result + romanNumerals[i]
                number = number - numbers[i]
            }
        }
    }
    return result
}

module.exports = convert
