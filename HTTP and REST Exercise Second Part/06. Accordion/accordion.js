function solution() {
    const baseUrl = 'http://localhost:3030/jsonstore/advanced/articles/list';
    const mainConstructor = document.getElementById('main');
    fetch(baseUrl)
        .then(response => response.json())
        .then(data => {
            for (const key in data) {
               let info = data[key]
               let divAccorion = document.createElement('div')
               divAccorion.classList.add('accordion')
               let divHead = document.createElement('div');
               divHead.classList.add('head');
               let divExtra = document.createElement('div');
               divExtra.classList.add('extra');
               divExtra.style.display = 'none';
               let spanElement = document.createElement('span');
               spanElement.textContent = info.title;
               let pElement = document.createElement('p');
               let buttonElement = document.createElement('button');
               buttonElement.id = info._id;
               buttonElement.classList.add('button')
               buttonElement.textContent = 'More';
               
               divExtra.appendChild(pElement);
               divHead.appendChild(spanElement);
               divHead.appendChild(buttonElement);
               divAccorion.appendChild(divHead);
               divAccorion.appendChild(divExtra);
               mainConstructor.appendChild(divAccorion);

               buttonElement.addEventListener('click', function() {
                fetch(`http://localhost:3030/jsonstore/advanced/articles/details/${info._id}`)
                    .then(response => response.json())
                    .then(data => {
                        if(divExtra.style.display === 'none') {
                            divExtra.style.display = 'block';
                            pElement.textContent = data.content;
                            buttonElement.textContent = 'Less'
                        } else {
                            divExtra.style.display = 'none';
                            buttonElement.textContent = 'More'
                        }
                        
                    })
                    .catch(error => console.log(error))
               })
               

            }
        })
        .catch(error => error)

}

solution()