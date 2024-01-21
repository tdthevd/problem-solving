/**
 * 
 * Given an integer, if the length of it's digits is a perfect square, return a square block of sqroot(length) * sqroot(length). If not, simply return "Not a perfect square!".

Examples:

1212 returns:

"12
12"
Note: 4 digits so 2 squared (2x2 perfect square). 2 digits on each line.

123123123 returns:

"123
123
123"
Note: 9 digits so 3 squared (3x3 perfect square). 3 digits on each line.


 * Splits a number into blocks of equal length, where the length is the square root of the number of digits.
 * @param {number} num - The number to be split into blocks.
 * @returns {string} - The blocks of the number, separated by a newline character.
 * @throws {string} - If the number of digits is not a perfect square.
 */
function perfectSquareBlock(num) {
    const digits = String(num).length;
    const squareRoot = Math.sqrt(digits);

    if (Number.isInteger(squareRoot)) {
        const block = [];
        const strNum = String(num);
        for (let i = 0; i < digits; i += squareRoot) {
            block.push(strNum.substr(i, squareRoot));
        }
        return block.join('\n');
    } else {
        return "Not a perfect square!";
    }
}

console.log(perfectSquareBlock(1212)); // Output: "12\n12"
console.log(perfectSquareBlock(123123123)); // Output: "123\n123\n123"
