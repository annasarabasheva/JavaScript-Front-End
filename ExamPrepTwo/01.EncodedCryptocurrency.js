function encodedCrypto(data) {
    let encodedMessage = data.shift();
    for (let i=0; i < data.length; i++) {
        let line = data[i].split('?')
        let command = line[0];
        if (command === 'Buy') {
            console.log(`The cryptocurrency is: ${encodedMessage}`)
            break
        }

        if (command === 'TakeEven') {
            let newEncM = '';
            for (let y=0; y < encodedMessage.length; y++) {
                if(y % 2 === 0) {
                    newEncM += encodedMessage[y]
                }
            }
            encodedMessage = newEncM;
            console.log(encodedMessage)
        } else if (command === 'ChangeAll') {
            let substring = line[1];
            let replacement = line[2];
            let index = encodedMessage.indexOf(substring);
            while (index !== -1) {
                encodedMessage = encodedMessage.slice(0, index) + replacement + encodedMessage.slice(index + substring.length);
                index = encodedMessage.indexOf(substring, index + replacement.length);
            }
            console.log(encodedMessage)
 
        } else if (command === 'Reverse') {
            let substring = line[1];
            let index = encodedMessage.indexOf(substring);
    
            if (index !== -1) { // If the substring is found
                // Cut out the substring
                let cutSubstring = encodedMessage.slice(index, index + substring.length);
                // Reverse the cut substring
                let reversedSubstring = '';
                for (let i = cutSubstring.length - 1; i >= 0; i--) {
                    reversedSubstring += cutSubstring[i];
                }
                // Add the reversed substring at the end of the message
                encodedMessage = encodedMessage.slice(0, index) + encodedMessage.slice(index + substring.length) + reversedSubstring;
                console.log(encodedMessage);
            } else {
                console.log("error");
            }
}
        }

    }




encodedCrypto((["PZDfA2PkAsakhnefZ7aZ", 
"TakeEven",
"TakeEven",
"TakeEven",
"ChangeAll?Z?X",
"ChangeAll?A?R",
"Reverse?PRX",
"Buy"])

);