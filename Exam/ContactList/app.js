window.addEventListener("load", solve);

function solve() {
  const nameElement = document.getElementById('name');
  const phoneElement = document.getElementById('phone');
  const categoryElement = document.getElementById('category');
  const addButton = document.getElementById('add-btn');
  const ulCheckList = document.getElementById('check-list');
  const ulContactList = document.getElementById('contact-list');
  addButton.addEventListener('click', function() {
    let name = nameElement.value;
    let phone = phoneElement.value;
    let category = categoryElement.value;
    


    let liElement = document.createElement('li');
    let articleElement = document.createElement('article');
    let divElement = document.createElement('div');
    divElement.classList.add('buttons');
    let pName = document.createElement('p');
    pName.textContent = `name:${nameElement.value}`;
    let pPhone = document.createElement('p');
    pPhone.textContent = `phone:${phoneElement.value}`;
    let pCategory = document.createElement('p');
    pCategory.textContent = `category:${categoryElement.value}`;
    articleElement.appendChild(pName);
    articleElement.appendChild(pPhone);
    articleElement.appendChild(pCategory);
    
    let editButton = document.createElement('button');
    editButton.classList.add('edit-btn');
    let saveButton = document.createElement('button');
    saveButton.classList.add('save-btn');
    divElement.appendChild(editButton);
    divElement.appendChild(saveButton);
    liElement.appendChild(articleElement);
    liElement.appendChild(divElement);
    ulCheckList.appendChild(liElement);
    nameElement.value = '';
    phoneElement.value = '';
    categoryElement.value = '';

    editButton.addEventListener('click', function() {
      ulCheckList.removeChild(liElement);
      nameElement.value = name;
      phoneElement.value = phone;
      categoryElement.value = category;
      
    })

    saveButton.addEventListener('click', function() {
      ulCheckList.removeChild(liElement);
      let newLiElement = document.createElement('li');
      let deleteButton = document.createElement('button');
      deleteButton.classList.add('del-btn');
      newLiElement.appendChild(articleElement);
      newLiElement.appendChild(deleteButton);
      ulContactList.appendChild(newLiElement);

      deleteButton.addEventListener('click', function() {
        ulContactList.removeChild(newLiElement);
      })

    })

    


  })

    
}
  