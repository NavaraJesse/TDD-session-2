function convert(number) {
    let result = "";
    const numbers = [10, 9, 5, 4, 1]
    const romanNumerals = ["X", "IX", "V", "IV", "I"]
    while(number > 0) {
        for(let i = 0; i < numbers.length; i++ ) {
            if (number >= numbers[i]) {
                result += romanNumerals[i]
                number -= numbers[i]
                break
            }
        }
    }
    return result
}

module.exports = convert
