function passwordValidator(password) {
    let flagLength = false;
    if (password.length < 6 || password.length > 10) {
        flagLength = true;
        console.log("Password must be between 6 and 10 characters");
    }
    let regex = /^[a-zA-Z0-9]+$/;
    if (regex.test(password) === false) {
        console.log("Password must consist only of letters and digits");
    }
    let digitCount = 0;
    for (let char of password) {
        if (/[0-9]/.test(char)) {
            digitCount++;
        }
    }
    if (digitCount < 2) {
        console.log("Password must have at least 2 digits");
    }
    
    if (digitCount >= 2 && regex.test(password) === true && flagLength === false) {
        console.log("Password is valid");
    }
}

passwordValidator('Pa$s$s');