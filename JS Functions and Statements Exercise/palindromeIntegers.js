function checkPalindromes(arr) {

    function isPalindrome(num) {
        // Convert number to string to facilitate palindrome check
        let numStr = num.toString();
        let len = numStr.length;
        
        // Iterate over half of the string's length
        for (let i = 0; i < Math.floor(len / 2); i++) {
            // Check if characters at symmetric positions match
            if (numStr[i] !== numStr[len - 1 - i]) {
                return false; // If not, it's not a palindrome
            }
        }
        return true; // If loop completes, it's a palindrome
    }

    let results = [];
    
    // Iterate through each number in the array
    for (let num of arr) {
        // Check if the number is a palindrome
        if (isPalindrome(num)) {
            results.push(true);
        } else {
            results.push(false);
        }
    }
    console.log(results.join('\n'));
}

checkPalindromes([123,323,421,121]);