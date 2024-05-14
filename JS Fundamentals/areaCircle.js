function solve(value) {
    if (typeof value === 'number') {
        console.log((Math.PI * value**2).toFixed(2))
    } else {
        console.log(`We can not calculate the circle area, because we receive a ${typeof value}.`)
    }
}
solve('name');