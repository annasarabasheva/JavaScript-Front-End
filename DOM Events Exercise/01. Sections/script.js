function create(words) {
   let contentElement = document.getElementById('content');
   for (const word of words) {
      let newElement = document.createElement('div');
      let paragraphElement = document.createElement('p');
      paragraphElement.textContent = word;
      paragraphElement.style.display = 'none';
      newElement.appendChild(paragraphElement);
      contentElement.appendChild(newElement);
      newElement.addEventListener('click', function(){
         paragraphElement.style.display = '';

      });
   }
}