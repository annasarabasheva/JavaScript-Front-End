function solve(words, text) {
    let splittedWords = words.split(', ');
    let splittedText = text.split(' ');
    const copyText = [...splittedText];
    for (let i = 0; i < copyText.length; i++) {
        let wordMatch = splittedWords.find(word => word.length === copyText[i].length);
        if (wordMatch && copyText[i].includes('*')) {
            splittedText[i] = splittedText[i].replace('*', wordMatch);
        }
    }
    let newText = splittedText.join(' ');
    newText = newText.replace(/\*/g, '');
    console.log(newText);
}

solve('great, learning',
'softuni is ***** place for ******** new programming languages'
);
