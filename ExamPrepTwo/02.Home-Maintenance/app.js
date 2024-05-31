window.addEventListener("load", solve);

function solve() {
    const placeElement = document.getElementById('place');
    const actionElement = document.getElementById('action');
    const personElement = document.getElementById('person');
    const addButton = document.getElementById('add-btn');
    const ulTaskList = document.getElementById('task-list');
    const ulDoneList = document.getElementById('done-list')
    addButton.addEventListener('click', function() {
        let place = placeElement.value;
        let action = actionElement.value;
        let person = personElement.value;
        let liElement = document.createElement('li');
        liElement.classList.add('clean-task');
        let articleElement = document.createElement('article');
        let divElement = document.createElement('div');
        divElement.classList.add('buttons');
        let pPlace = document.createElement('p');
        pPlace.textContent = `Place: ${placeElement.value}`;
        let pAction = document.createElement('p');
        pAction.textContent = `Action: ${actionElement.value}`;
        let pPerson = document.createElement('p');
        pPerson.textContent = `Person: ${personElement.value}`;
        articleElement.appendChild(pPlace);
        articleElement.appendChild(pAction);
        articleElement.appendChild(pPerson);
        let editBtn = document.createElement('button');
        editBtn.classList.add('edit')
        editBtn.textContent = 'Edit';
        let doneBtn = document.createElement('button');
        doneBtn.classList.add('done');
        doneBtn.textContent ='Done';
        divElement.appendChild(editBtn);
        divElement.appendChild(doneBtn);
        liElement.appendChild(articleElement);
        liElement.appendChild(divElement);
        ulTaskList.appendChild(liElement);
        placeElement.value = '';
        actionElement.value = '';
        personElement.value = '';
        editBtn.addEventListener('click', function() {
            ulTaskList.removeChild(liElement);
            placeElement.value = place;
            actionElement.value = action;
            personElement.value = person;

        })

        doneBtn.addEventListener('click', function() {
            ulTaskList.removeChild(liElement);
            let newliElement = document.createElement('li');
            let deleteButton = document.createElement('button');
            deleteButton.classList.add('delete');
            deleteButton.textContent = 'Delete';
            newliElement.appendChild(articleElement);
            newliElement.appendChild(deleteButton);
            ulDoneList.appendChild(newliElement);
            deleteButton.addEventListener('click', function() {
                ulDoneList.removeChild(newliElement)
            })


        })

    })
}