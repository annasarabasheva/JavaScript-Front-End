function addAndSubtract(numOne, numTwo, numThree) {
    function sum(numOne, numTwo) {
        return numOne + numTwo;
    }
    let newNumber = sum(numOne, numTwo);

    function subtract(newNumber, numThree) {
        return newNumber - numThree;

    }
    return subtract(newNumber, numThree);
}

console.log(addAndSubtract(1, 17, 30));