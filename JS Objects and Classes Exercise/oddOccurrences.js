function solve(info) {
    let words = info.split(' ');
    let occurrences = {};
    for (let word of words) {
        let convertedWord = word.toLowerCase()
        if (!occurrences[convertedWord]) {
            occurrences[convertedWord] = 0
        }
        occurrences[convertedWord] += 1
        
    }
    let oddO = [];
    for (let w in occurrences) {
        if (occurrences[w] % 2 != 0) {
            oddO.push(w)
        }
    }
    console.log(oddO. join(' '));
}

solve('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');
solve('Cake IS SWEET is Soft CAKE sweet Food');