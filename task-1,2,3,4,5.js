/*Task-1
Take four parameters. Multiply the four numbers and then return the result*/

function multiplyFourNumbers(a, b, c, d) {
    return a * b * c * d;
}
const result = multiplyFourNumbers(2, 3, 4, 5);
console.log(result); // Output: 120


/*Task-2
Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.*/

function processNumber(num) {
    if (num % 2 === 0) {
        // Number is even
        return num / 2;
    } else {
        // Number is odd
        return num * 2;
    }
}

console.log(processNumber(4)); // Output: 2 (since 4 is even)
console.log(processNumber(5)); // Output: 10 (since 5 is odd)


/*Task-3
Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.*/

function make_avg(arr, size) {
    if (size <= 0) return 0; // Handle cases where the size is non-positive

    let sum = 0;
    for (let i = 0; i < size; i++) {
        sum += arr[i];
    }

    return sum / size;
}

const numbers = [1, 2, 3, 4, 5];
const size = numbers.length;
console.log(make_avg(numbers, size)); // Output: 3

/**Task-4
Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string. */


function count_zero(binaryString) {
    // Ensure the input is a string and consists only of '0' and '1'
    if (typeof binaryString !== 'string' || /[^01]/.test(binaryString)) {
        throw new Error('Invalid binary string');
    }


    let count = 0;

    for (let i = 0; i < binaryString.length; i++) {
        if (binaryString[i] === '0') {
            count++;
        }
    }

    return count;
}

const binaryStr = "1010101001";
console.log(count_zero(binaryStr)); // Output: 5


/*Task-5
Write a function called odd_even() which takes an integer value and tells whether this value is even or odd. If even return Even. If odd return Odd*/
function odd_even(number) {
    if (number % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}


console.log(odd_even(4)); // Outputs: Even
console.log(odd_even(7)); // Outputs: Odd