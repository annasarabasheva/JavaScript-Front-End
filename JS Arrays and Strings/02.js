function solve(num, elements) {
    let numbers = [];
    for (let i = 0; i < num; i++) {
        numbers.push(elements[i])
    }
    console.log(numbers.reverse().join(' '));
}

solve(3, [10, 20, 30, 40, 50]);