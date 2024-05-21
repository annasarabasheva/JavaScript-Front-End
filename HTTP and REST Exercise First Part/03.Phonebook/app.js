function attachEvents() {
    const loadButton = document.getElementById('btnLoad');
    const createButton = document.getElementById('btnCreate');
    const phonebookElement = document.getElementById('phonebook');
    const personElement = document.getElementById('person');
    const phoneElement = document.getElementById('phone');
    const baseUrl = 'http://localhost:3030/jsonstore/phonebook';

    loadButton.addEventListener('click', function() {
        phonebookElement.innerHTML = '';
        fetch(baseUrl)
            .then(response => response.json())
            .then(data => {
                for (const key in data) {
                    let info = data[key];
                    let liElement = document.createElement('li');
                    liElement.textContent = `${info.person}: ${info.phone}`;
                    let deleteButton = document.createElement('button');
                    deleteButton.textContent = 'Delete';
                    deleteButton.addEventListener('click', function() {
                        fetch(`${baseUrl}/${info._id}`, { // Remove the extra curly brace here
                            method: 'DELETE'
                        })
                        .then(() => {
                            liElement.remove()
                            loadPhonebook();
                        })
                        .catch(error => console.log(error));
                    });
                    liElement.appendChild(deleteButton);
                    phonebookElement.appendChild(liElement);
                }
            })
            .catch(error => console.log(error));
    });

    createButton.addEventListener('click', function() {

        const personName = personElement.value;
        const personPhone = phoneElement.value;

        fetch(baseUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "person": personName,
                "phone": personPhone
            })
        })
        .then(() => {
            personElement.value = '';
            phoneElement.value = '';
            loadPhonebook();
        })
        .catch(error => console.log(error));

        
    });

    function loadPhonebook() {
        phonebookElement.innerHTML = '';
        fetch(baseUrl)
            .then(response => response.json())
            .then(data => {
                for (const key in data) {
                    let info = data[key];
                    let liElement = document.createElement('li');
                    liElement.textContent = `${info.person}: ${info.phone}`;
                    let deleteButton = document.createElement('button');
                    deleteButton.textContent = 'Delete'
                    deleteButton.addEventListener('click', function() {
                        fetch(`${baseUrl}/${info._id}`, { // Remove the extra curly brace here
                            method: 'DELETE'
                        })
                        .then(() => {
                            liElement.remove()
                            loadPhonebook();
                        })
                        .catch(error => console.log(error));
                    });
                    liElement.appendChild(deleteButton);
                    phonebookElement.appendChild(liElement);
                }
            })
            .catch(error => console.log(error));
    }


}

attachEvents();
