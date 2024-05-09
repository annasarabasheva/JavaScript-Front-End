function addItem() {
    const itemList = document.getElementById('items');
    const inputElement = document.getElementById('newItemText');
    let newItemElement = document.createElement('li');
    newItemElement.textContent = inputElement.value;
    let deleteLink = document.createElement('a');
    deleteLink.href = '#';
    deleteLink.textContent = '[Delete]';
    deleteLink.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default behavior of the anchor element
        this.parentNode.remove(); // Remove the parent list item
    });
    newItemElement.appendChild(deleteLink)
    itemList.appendChild(newItemElement);
    inputElement.value = '';
}