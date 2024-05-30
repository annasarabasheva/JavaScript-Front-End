window.addEventListener("load", solve);
function solve() {
    const addButton = document.getElementById('add-btn');
    const expenseElement = document.getElementById('expense');
    const amountElement = document.getElementById('amount');
    const dateElement = document.getElementById('date');
    const previewListElement = document.getElementById('preview-list');
    const expensesListElement = document.getElementById('expenses-list');
    let deleteButton = document.querySelector('button.btn.delete');
    addButton.addEventListener('click', function() {
        const saveExpense = expenseElement.value;
        const saveAmount = amountElement.value;
        const saveDate = dateElement.value;
        let liElement = document.createElement('li');
        liElement.classList.add('expense-item');
        let articleElement = document.createElement('article');
        let divElement = document.createElement('div');
        divElement.classList.add('buttons');
        let editBtn = document.createElement('button');
        editBtn.classList.add('btn');
        editBtn.classList.add('edit');
        editBtn.textContent = 'edit'
        let okBtn = document.createElement('button')
        okBtn.classList.add('btn');
        okBtn.classList.add('ok');
        okBtn.textContent = 'ok';
        let pExpense = document.createElement('p');
        pExpense.textContent = `Type: ${expenseElement.value}`
        let pAmount = document.createElement('p');
        pAmount.textContent = `Amount: ${amountElement.value}$`
        let pDate = document.createElement('p');
        pDate.textContent = `Date: ${dateElement.value}`
        articleElement.appendChild(pExpense);
        articleElement.appendChild(pAmount);
        articleElement.appendChild(pDate);
        divElement.appendChild(editBtn);
        divElement.appendChild(okBtn);
        liElement.appendChild(articleElement);
        liElement.appendChild(divElement)
        previewListElement.appendChild(liElement)
        addButton.disabled = true;
        expenseElement.value = '';
        amountElement.value = '';
        dateElement.value = '';
        editBtn.addEventListener('click', function() {
            expenseElement.value = saveExpense;
            amountElement.value = saveAmount;
            dateElement.value = saveDate;
            addButton.disabled = false;
            previewListElement.innerHTML = '';
        })
        okBtn.addEventListener('click', function() {
            previewListElement.innerHTML = '';
            liElement.removeChild(divElement);
            expensesListElement.appendChild(liElement);
            addButton.disabled = false;
            deleteButton.addEventListener('click', function() {
                location.reload();
            })

        })

    })
    

}
