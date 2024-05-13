function solve(num) {
    let numToString = num.toString();
    let sum = 0;
    let char;
    let flag = false;
    for (let i = 0; i < numToString.length; i++){
        if (char == undefined) {
            char = numToString[i]
        }
        if (char !== undefined && char !== numToString[i]){
            console.log('false')
            flag = true;
            break
        }
   
    }
    if (flag !== true ) {
        console.log('true')
    }
    for (let i = 0; i < numToString.length; i++){
        sum += parseInt(numToString[i]);
    }
    console.log(sum);
}
solve(2222222)