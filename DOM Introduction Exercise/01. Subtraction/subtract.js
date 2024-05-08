function subtract() {
    let firstElement = document.getElementById('firstNumber');
    let secondElement = document.getElementById('secondNumber');
    let resultElement = document.getElementById('result');
    let result = Number(firstElement.value) - Number(secondElement.value)
    resultElement.textContent = result
    console.log(resultElement.textContent);
}