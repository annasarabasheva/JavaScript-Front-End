function loadingBar(number) {
    if (number === 100) {
        console.log("100% Complete!\n[%%%%%%%%%%]");
    } else {
        let perN = number / 10;
        let percenatges = '';
        for (let i= 0; i < perN; i++) {
            percenatges += '%';
        }
        for (let i = perN; i < 10; i++) {
            percenatges += ".";
        }
        console.log(`${number}% [${percenatges}]\nStill loading...`)
    }

}


loadingBar(50)