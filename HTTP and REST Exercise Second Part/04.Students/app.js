function attachEvents() {
  const baseUrl = 'http://localhost:3030/jsonstore/collections/students';
  const firstNameInput = document.querySelector('input[name="firstName"]');
  const lastNameInput = document.querySelector('input[name="lastName"]');
  const facultyNumberInput = document.querySelector('input[name="facultyNumber"]');
  const gradeInput = document.querySelector('input[name="grade"]');
  const submitButton = document.getElementById('submit');
  const tbodyEl = document.querySelector('#results tbody');

  // Function to fetch and render data in the table
  function renderTable() {
      fetch(baseUrl)
          .then(response => response.json())
          .then(data => {
              tbodyEl.innerHTML = '';
              for (const key in data) {
                  let info = data[key];
                  let trElement = document.createElement('tr');
                  trElement.innerHTML = `
                      <td>${info.firstName}</td>
                      <td>${info.lastName}</td>
                      <td>${info.facultyNumber}</td>
                      <td>${info.grade}</td>
                  `;
                  tbodyEl.appendChild(trElement);
              }
          })
          .catch(error => console.error(error));
  }

  // Initial rendering of the table
  renderTable();

  // Event listener for the submit button
  submitButton.addEventListener('click', function() {
      fetch(baseUrl, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({
              "firstName": firstNameInput.value,
              "lastName": lastNameInput.value,
              "facultyNumber": facultyNumberInput.value,
              "grade": gradeInput.value,
          })
      })
      .then(() => {
          // Clear input fields after successful submission
          firstNameInput.value = '';
          lastNameInput.value = '';
          facultyNumberInput.value = '';
          gradeInput.value = '';
          // Update the table with the new data
          renderTable();
      })
      .catch(error => console.error(error));
  });
}

attachEvents();
