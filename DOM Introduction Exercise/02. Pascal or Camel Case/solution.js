function solve() {
  let textElement = document.getElementById('text');
  let conventionElement = document.getElementById('naming-convention');
  let result = document.getElementById('result');
  let words = textElement.value.split(' ');
  if (conventionElement.value != 'Pascal Case' && conventionElement.value != 'Camel Case') {
      result.textContent = 'Error!';
  }
  if (conventionElement.value == 'Camel Case') {
    let newString = '';
    for (let i=0; i < words.length; i ++) {
      if (i == 0) {
        newString += words[0].toLowerCase();
        continue
      }

    for (let y=0; y < words[i].length; y++) {
      if (y == 0) {
        newString += words[i][0].toUpperCase();
        continue
      }
      newString += words[i][y].toLowerCase();
    }

    }
    
    result.textContent = newString;
    
  } else if (conventionElement.value == 'Pascal Case') {
    let newString = '';
    for (let i=0; i < words.length; i ++) {
      for (let p = 0; p < words[i].length; p++) {
        if (p == 0) {
          newString += words[i][0].toUpperCase();
          continue
        }
        newString += words[i][p].toLowerCase();

      }

    }
    
    result.textContent = newString;
  }
}