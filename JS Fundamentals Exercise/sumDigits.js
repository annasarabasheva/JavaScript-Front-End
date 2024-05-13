function solve(num) {
    let numberString = num.toString();
    let sum = 0;
    for (let i = 0; i < numberString.length; i++) {
        sum += parseInt(numberString[i]);
    }
    console.log(sum);
}
solve(245678);