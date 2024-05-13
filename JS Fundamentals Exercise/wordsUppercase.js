function solve(inputString) {
    // Use regular expression to match words (letters separated by non-word characters)
    const words = inputString.match(/\w+/g);
    
    // Convert each word to uppercase
    const uppercaseWords = words.map(word => word.toUpperCase());

    // Join the uppercase words with commas
    const result = uppercaseWords.join(', ');

    console.log(result);
}
solve('hello')