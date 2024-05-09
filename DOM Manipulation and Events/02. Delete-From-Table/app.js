function deleteByEmail() {
    let inputEmailElement = document.querySelector('input[type=text]');
    let rowsElements = document.querySelectorAll('tbody tr');
    let tbody = document.querySelector('tbody')
    let result = document.getElementById('result');
    const emailsElements = document.querySelectorAll('td:nth-child(2)');
    for (const emailElement of emailsElements) {
        if (emailElement.textContent === inputEmailElement.value) {
            let rowToRemove = Array.from(rowsElements).find(row => row.textContent.includes(emailElement.textContent));
            tbody.removeChild(rowToRemove)
            result.textContent = 'Deleted.'
        }
    }
    if (result.textContent !== 'Deleted.') {
        result.textContent = 'Not found.'
    }
    inputEmailElement.value = '';
}