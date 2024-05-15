function factoralDivision(numOne, numTwo) {
    let factOne = 1;
    let factTwo = 1;
    for (let i = 1; i <= numOne; i++) {
        factOne *= i;
        
    }
    for (let i = 1; i <= numTwo; i++) {
        factTwo *= i;
        
    }
    console.log((factOne / factTwo).toFixed(2));
    

}

factoralDivision(6, 2);