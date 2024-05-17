function solve(string) {
    const words = string.split(/(?=[A-Z])/);
    console.log(words.join(', '));
    
}
solve('SplitMeIfYouCanHaHaYouCantOrYouCan')