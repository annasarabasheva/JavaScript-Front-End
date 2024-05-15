function charactersInRange(firstCh, secondCh) {
    let asciiValueFirst = firstCh.charCodeAt(0);
    let asciiValueSecond = secondCh.charCodeAt(0);
    let charBetween = [];
    if (asciiValueFirst < asciiValueSecond) {
        for (let i=asciiValueFirst + 1; i < asciiValueSecond; i++) {
            charBetween.push(String.fromCharCode(i))
        }
    } else {
        for (let i=asciiValueSecond + 1; i < asciiValueFirst; i++) {
            charBetween.push(String.fromCharCode(i))
        }
    }
    console.log(charBetween.join(' '));
}

charactersInRange('C',
'#'

)