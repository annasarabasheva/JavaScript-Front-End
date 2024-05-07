function colorize() {
    let colorizedElements = document.getElementsByTagName('tr');
    let array = Array.from(colorizedElements);
    array.shift();
    for (let i=0; i < array.length; i++) {
        if (i % 2 == 0) {
            array[i].style.backgroundColor = 'Teal'
        }
    }
}