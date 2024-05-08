function solve() {
  let text = document.getElementById('input').value.split('.');
    let sentences = [];
    for (const sentence of text) {
      if (sentence) {
        sentences.push(sentence);
      }
    }
  let output = document.getElementById('output')
  for (let i = 0; i < sentences.length; i += 3) {
    // Get the current group of sentences
    let paragraphSentences = sentences.slice(i, i + 3);

    // Create a new paragraph element
    let paragraph = document.createElement('p');

    // Set the content of the paragraph
    paragraph.textContent = paragraphSentences.join('. ') + '.';

    // Append the paragraph to the output
    output.appendChild(paragraph);
}
}