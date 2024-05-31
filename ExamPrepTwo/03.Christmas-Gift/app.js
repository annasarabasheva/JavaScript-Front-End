const baseUrl = 'http://localhost:3030/jsonstore/gifts';
const loadButton = document.getElementById('load-presents');
const divGiftList = document.getElementById('gift-list');
const addButton = document.getElementById('add-present');
const editButton = document.getElementById('edit-present');
const presentElement = document.getElementById('gift');
const forElement = document.getElementById('for');
const priceElement = document.getElementById('price');
loadButton.addEventListener('click', function() {
    divGiftList.innerHTML = '';
    editButton.disabled = true;
    fetch(baseUrl)
        .then(response => response.json())
        .then(data => {
            for (const key in data) {
               let info = data[key];
               let divGiftSock = document.createElement('div');
               divGiftSock.classList.add('gift-sock');
               let divContent = document.createElement('div');
               divContent.classList.add('content');
               let divButtons = document.createElement('div');
               divButtons.classList.add('buttons-container');
               let pPresent = document.createElement('p');
               pPresent.textContent = info.gift;
               let pName = document.createElement('p');
               pName.textContent = info.for;
               let pPrice = document.createElement('p');
               pPrice.textContent = info.price;
               divContent.appendChild(pPresent);
               divContent.appendChild(pName);
               divContent.appendChild(pPrice);
               let changeButton = document.createElement('button');
               changeButton.classList.add('change-btn');
               changeButton.textContent = 'Change';
               let deleteButton = document.createElement('button');
               deleteButton.classList.add('delete-btn');
               deleteButton.textContent = 'Delete';
               divButtons.appendChild(changeButton);
               divButtons.appendChild(deleteButton);
               divGiftSock.appendChild(divContent);
               divGiftSock.appendChild(divButtons);
               divGiftList.appendChild(divGiftSock);
               changeButton.addEventListener('click', function() {
                    presentElement.value = info.gift;
                    forElement.value = info.for;
                    priceElement.value = info.price;
                    divGiftList.removeChild(divGiftSock);
                    editButton.disabled = false;
                    addButton.disabled = true;
                    editButton.addEventListener('click', function() {
                        fetch(`${baseUrl}/${info._id}`, {
                            method: 'PUT',
                            body: JSON.stringify({
                                gift: presentElement.value,
                                for: forElement.value,
                                price: priceElement.value
                            })
                        })
                        presentElement.value = '';
                        forElement.value = '';
                        priceElement.value = '';
                        editButton.disabled = true;
                        addButton.disabled = false;
                   })

               })

               deleteButton.addEventListener('click', function() {
                    fetch(`${baseUrl}/${info._id}`, {
                        method: 'DELETE'
                    })
                   
               })
               
               

            }
        })
        .catch(error => console.log(error))
})

addButton.addEventListener('click', function() {
    fetch(baseUrl, {
        method: 'POST',
        body: JSON.stringify({
            gift: presentElement.value,
            for: forElement.value,
            price: priceElement.value
        })
    })
    presentElement.value = '';
    forElement.value = '';
    priceElement.value = '';
})