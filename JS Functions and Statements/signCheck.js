function signCheck(numOne, numTwo, numThree) {
    if ((numOne * numTwo * numThree) >= 0 ) {
        console.log('Positive');
    } else {    
        console.log('Negative');
    }
}

signCheck( 5,
    12,
   -15
   )