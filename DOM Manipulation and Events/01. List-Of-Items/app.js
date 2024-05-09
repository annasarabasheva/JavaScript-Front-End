function addItem() {
    const itemList = document.getElementById('items');
    const inputElement = document.getElementById('newItemText');
    let newItemElement = document.createElement('li');
    newItemElement.textContent = inputElement.value;
    itemList.appendChild(newItemElement);
    inputElement.value = '';
}