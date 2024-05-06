function encodeAndDecodeMessages() {
    let firstTextAreaElement = document.querySelector('textarea');
    let secondTextAreaElement = document.querySelectorAll('textarea')[1];
    let encodeButton = document.querySelector('button');
    let decodeButton = document.querySelectorAll('button')[1];
    encodeButton.addEventListener('click', function() {
        let encodedSentence = '';
        for (let i = 0; i < firstTextAreaElement.value.length; i++) {
            // Retrieve the ASCII code of the current character
            let charCode = firstTextAreaElement.value.charCodeAt(i);
            
            // Increment the ASCII code by 1
            charCode++;
            
            // Convert the incremented ASCII code back to its corresponding character
            let encryptedChar = String.fromCharCode(charCode);
            
            // Append the encrypted character to the encrypted message
            encodedSentence += encryptedChar;
        }
        firstTextAreaElement.value = '';
        secondTextAreaElement.textContent = encodedSentence;
        
    });

    decodeButton.addEventListener('click', function() {
        let decodedSentence = '';
        for (let i = 0; i < secondTextAreaElement.textContent.length; i++) {
            // Retrieve the ASCII code of the current character
            let charCode = secondTextAreaElement.textContent.charCodeAt(i);
            
            // Increment the ASCII code by 1
            charCode--;
            
            // Convert the incremented ASCII code back to its corresponding character
            let encryptedChar = String.fromCharCode(charCode);
            
            // Append the encrypted character to the encrypted message
            decodedSentence += encryptedChar;
        }
        secondTextAreaElement.textContent = decodedSentence;
        
    })
        

}