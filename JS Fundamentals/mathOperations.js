function solve(numOne, numTwo, operator) {
    let result = undefined;
    if (operator =='+') {
        result = numOne + numTwo
    } else if (operator == '-') {
        result = numOne - numTwo
    }else if (operator == '*') {
        result = numOne * numTwo
    }else if (operator == '/') {
        result = numOne / numTwo
    }
    else if (operator == '%') {
        result = numOne % numTwo
    }else if (operator == '**') {
        result = numOne ** numTwo
    }
    console.log(result)

}
solve(3, 5.5, '*')