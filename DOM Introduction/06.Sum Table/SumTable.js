function sumTable() {
    let priceElements = document.querySelectorAll('tr td:last-of-type:not(#sum)');
    let sum = 0;
    for (const element of priceElements) {
        sum += Number(element.textContent)
    }
    document.getElementById('sum').textContent = sum;
}