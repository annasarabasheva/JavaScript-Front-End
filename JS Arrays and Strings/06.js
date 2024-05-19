function solve(text, word) {
    let words = text.split(/\s+/);

    // Initialize a counter for occurrences
    let count = 0;

    // Iterate through each word
    for (let i = 0; i < words.length; i++) {
        // Check if the current word matches the target word (case insensitive)
        if (words[i].toLowerCase() === word.toLowerCase()) {
            // If it matches, increment the counter
            count++;
        }
    }

    // Return the count of occurrences
    console.log(count);
}
solve('This is a word and it also is a sentence',
'is'
)