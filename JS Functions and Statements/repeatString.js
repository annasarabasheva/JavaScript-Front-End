function repeatString(string, times) {
    let newString = '';
    for (let i=0;i < times; i++) {
        newString += string

    }
    return newString;

}

console.log(repeatString('abc', 3));