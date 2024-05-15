function oddAndEvenSum(number) {
    let oddSum = 0;
    let evenSum = 0;
    let numberAsString = number.toString();
    for (let i=0; i < numberAsString.length; i++) {
        if (parseInt(numberAsString[i]) % 2 == 0) {
            evenSum += parseInt(numberAsString[i]);
        } else {
            oddSum += parseInt(numberAsString[i]);
        }
    } 
    return `Odd sum = ${oddSum}, Even sum = ${evenSum}`
}
console.log(oddAndEvenSum(1000435));