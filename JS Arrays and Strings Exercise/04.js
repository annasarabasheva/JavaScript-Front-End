function solve(numbers) {
    let sortedNumbers = [];
    numbers.sort((a, b) => a - b); // Sort the numbers in ascending order
    while (numbers.length > 0) {
        sortedNumbers.push(numbers.shift()); // Push the smallest number
        if (numbers.length > 0) {
            sortedNumbers.push(numbers.pop()); // Push the biggest number
        }
    }
    return sortedNumbers;
}

let result = solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);
console.log(result);