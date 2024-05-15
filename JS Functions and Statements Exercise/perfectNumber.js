function printPerfectOrNot(num) {
    function isPerfectNumber(num) {
        if (num <= 0) {
            return false; // Perfect numbers are positive integers
        }
    
        let sum = 0;
    
        // Iterate through all positive divisors (excluding the number itself)
        for (let i = 1; i < num; i++) {
            if (num % i === 0) {
                sum += i; // Add divisor to the sum if it evenly divides the number
            }
        }
    
        // Check if the sum of divisors equals the original number
        if (sum === num) {
            return true; // Number is perfect
        } else {
            return false; // Number is not perfect
        }
    }
    
    if (isPerfectNumber(num)) {
        console.log("We have a perfect number!");
    } else {
        console.log("It's not so perfect.");
    }
}

// Example usage:
printPerfectOrNot(6); // Output: "We have a perfect number!"
printPerfectOrNot(28); // Output: "We have a perfect number!"
printPerfectOrNot(12); // Output: "It's not so perfect."
