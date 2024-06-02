const baseUrl = 'http://localhost:3030/jsonstore/games';
const nameElement = document.getElementById('g-name');
const typeElement = document.getElementById('type');
const maxPlayersElement = document.getElementById('players');
const addGameButton = document.getElementById('add-game');
const editGameButton = document.getElementById('edit-game');
const loadGamesButton = document.getElementById('load-games');
const divGamesList = document.getElementById('games-list');
loadGamesButton.addEventListener('click', function() {
    divGamesList.innerHTML = '';
    editGameButton.disabled = true;
    fetch(baseUrl)
        .then(response => response.json())
        .then(data => {
            for (const key in data) {
                let info = data[key];
                let divBoardGame = document.createElement('div')
                divBoardGame.classList.add('board-game');
                let divContent = document.createElement('div');
                divContent.classList.add('content');
                let divButtons = document.createElement('div');
                divButtons.classList.add('buttons-container');
                let pName = document.createElement('p');
                pName.textContent = info.name;
                let pPlayers = document.createElement('p');
                pPlayers.textContent = info.players;
                let pType = document.createElement('p');
                pType.textContent = info.type;
                divContent.appendChild(pName);
                divContent.appendChild(pPlayers);
                divContent.appendChild(pType);
                let changeButton =  document.createElement('button');
                changeButton.classList.add('change-btn');
                changeButton.textContent = 'Change';
                let deleteButton = document.createElement('button');
                deleteButton.classList.add('delete-btn');
                deleteButton.textContent = 'Delete';
                divButtons.appendChild(changeButton);
                divButtons.appendChild(deleteButton);
                divBoardGame.appendChild(divContent);
                divBoardGame.appendChild(divButtons);
                divGamesList.appendChild(divBoardGame);


                changeButton.addEventListener('click', function() {
                    nameElement.value = info.name;
                    typeElement.value = info.type;
                    maxPlayersElement.value = info.players;
                    editGameButton.disabled = false;
                    addGameButton.disabled = true;
                    
                    editGameButton.addEventListener('click', function() {
                        fetch(`${baseUrl}/${info._id}`, {
                            method: 'PUT',
                            body: JSON.stringify({
                                name: nameElement.value,
                                type: typeElement.value,
                                players: maxPlayersElement.value
                            })
                        })

                        nameElement.value = '';
                        typeElement.value = '';
                        maxPlayersElement.value = '';
                        editGameButton.disabled = true;
                        addGameButton.disabled = false;
                        
                    })
                })

                deleteButton.addEventListener('click', function() {
                    fetch(`${baseUrl}/${info._id}`, {
                        method: 'DELETE',
                    })
                })
            }
        })
        .catch(error => console.log(error))

    
})

addGameButton.addEventListener('click', function() {
    fetch(baseUrl, {
        method: 'POST',
        body: JSON.stringify({
            name: nameElement.value,
            type: typeElement.value,
            players: maxPlayersElement.value
        })
    })

    nameElement.value = '';
    typeElement.value = '';
    maxPlayersElement.value = '';
})