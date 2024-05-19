function solve(text, word) {
    let regex = new RegExp(word, 'g');
    let result = text.replace(regex, '*'.repeat(word.length));
    console.log(result);
}
solve('A small sentence with some words', 'small');