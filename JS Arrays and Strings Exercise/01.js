function solve(array, rotations) {
    for (let i = 0; i < rotations; i++) {
        num = array.shift()
        array.push(num)
    }
    console.log(array.join(' '));
}
solve([2, 4, 15, 31], 5);