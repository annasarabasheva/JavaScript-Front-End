function solve(string) {
    let hashWords = string.split(' ');
    let specialWords = [];
    for (let i = 0; i < hashWords.length; i++) {
        if (hashWords[i].startsWith('#') && hashWords[i].length > 1) {
            let replacedWord = hashWords[i].replace('#', '');
            specialWords.push(replacedWord);
        }
    }
    let onlyLetter = [];
    for (let word of specialWords) {
        if (/^[a-zA-Z]+$/.test(word)) {
            onlyLetter.push(word);
        }
    }
    console.log(onlyLetter.join('\n'));
}
solve('Nowadays everyone uses # to tag a #special word in #socialMedia')