function extractText() {
    let listElements = document.getElementsByTagName('li');
    let textElemnt = document.getElementById('result');
    for (let element of listElements) {
        textElemnt.value += element.textContent + "\n";
    }
}