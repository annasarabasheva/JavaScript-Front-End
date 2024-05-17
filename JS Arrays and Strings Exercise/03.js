function solve(names) {
    // Sort the array of names alphabetically
    names.sort((a,b) => a.localeCompare(b));
    
    // Iterate through the sorted array and print each name with its corresponding number
    for (let i = 0; i < names.length; i++) {
        console.log(`${i + 1}.${names[i]}`);
    }
}


solve(["John", "bob", "Christina", "Ema"]);