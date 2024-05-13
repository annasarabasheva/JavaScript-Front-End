function solve(numOne, numTwo) {
    let numbers = [];
    for (let i = numOne; i <= numTwo; i += 1) {
        numbers.push(i)
    }
    console.log(numbers.join(" "))
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    console.log(`Sum: ${sum}`)
}
solve(50, 60)