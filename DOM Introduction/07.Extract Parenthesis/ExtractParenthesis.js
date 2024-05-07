function extract(content) {
     // Get the paragraph element by ID
     const paragraph = document.getElementById(content);
     
     // Extract text content of the paragraph
     const text = paragraph.textContent;
     
     // Array to store extracted text
     const extractedText = [];
     
     let insideParentheses = false;
     let currentText = '';
     
     // Iterate through each character of the text
     for (let i = 0; i < text.length; i++) {
         const char = text[i];
         
         if (char === '(') {
             insideParentheses = true;
         } else if (char === ')') {
             insideParentheses = false;
             // Push currentText to extractedText array
             if (currentText.trim()) {
                 extractedText.push(currentText.trim());
             }
             currentText = ''; // Reset currentText
         } else if (char === ';' && insideParentheses) {
             // Split text by semicolon only if inside parentheses
             if (currentText.trim()) {
                 extractedText.push(currentText.trim());
             }
             currentText = ''; // Reset currentText
         } else {
             // Append character to currentText
             currentText += char;
         }
     }
     
     // Join extracted text with "; " (semicolon, space)
     const result = extractedText.join("; ");
     
     return result;
 }
    
    