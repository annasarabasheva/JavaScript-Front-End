function solve(word, text) {
    let splittedText = text.split(' ');
    let flag = false;
    for (i=0; i < splittedText.length;i++) {
        if (word.toLowerCase() === splittedText[i].toLowerCase()) {
            console.log(splittedText[i].toLowerCase());
            flag = true
            break
        }
    }
    if (flag === false) {
        console.log(`${word} not found!`)
    }

}
solve('python',
'JavaScript is the best programming language'

)