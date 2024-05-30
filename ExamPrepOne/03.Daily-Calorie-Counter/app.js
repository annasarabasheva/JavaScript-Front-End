const baseUrl = 'http://localhost:3030/jsonstore/tasks';
const buttonLoadMeals = document.getElementById('load-meals');
const divIdList = document.getElementById('list');
const buttonAdd = document.getElementById('add-meal');
const buttonEdit = document.getElementById('edit-meal');
const foodElement = document.getElementById('food');
const timeElement = document.getElementById('time');
const caloriesElement = document.getElementById('calories')

buttonLoadMeals.addEventListener('click', function() {
    divIdList.innerHTML = '';
    fetch(baseUrl) 
        .then(response => response.json())
        .then(data => {
            for (const key in data) {
                let info = data[key];
                let divMealElement = document.createElement('div');
                divMealElement.classList.add('meal');
                let divButtonElement = document.createElement('div');
                divButtonElement.classList.add('meal-buttons')
                let h2Element = document.createElement('h2');
                h2Element.textContent = info.food;
                let h3FElement = document.createElement('h3');
                h3FElement.textContent = info.time;
                let h3SElement = document.createElement('h3');
                h3SElement.textContent = info.calories;
                divMealElement.appendChild(h2Element);
                divMealElement.appendChild(h3FElement);
                divMealElement.appendChild(h3SElement);
                let buttonChange = document.createElement('button');
                buttonChange.textContent = 'Change';
                buttonChange.classList.add('change-meal');
                let buttonDelete = document.createElement('button');
                buttonDelete.textContent = 'Delete';
                buttonDelete.classList.add('delete-meal');
                divButtonElement.appendChild(buttonChange);
                divButtonElement.appendChild(buttonDelete);
                divMealElement.appendChild(divButtonElement);
                divIdList.appendChild(divMealElement);

                buttonDelete.addEventListener('click', function() {
                    const mealId = info._id; 
                    const mealUrl = `${baseUrl}/${mealId}`;
                    fetch(mealUrl, {
                        method: 'DELETE'
                    })

                })

                buttonChange.addEventListener('click', function() {
                    divIdList.removeChild(divMealElement);
                    foodElement.value = info.food;
                    timeElement.value = info.time;
                    caloriesElement.value = info.calories;
                    buttonAdd.disabled = true;
                    buttonEdit.disabled = false;
                    buttonEdit.onclick = function() {
                        // Construct the URL for the specific meal
                        const mealId = info._id; // Assuming _id is the unique identifier for each meal
                        const mealUrl = `${baseUrl}/${mealId}`;
                    
                        // Make the PUT request
                        fetch(mealUrl, {
                            method: 'PUT',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({
                                food: foodElement.value,
                                time: timeElement.value,
                                calories: caloriesElement.value
                            })
                        })
                        .then(response => {
                            if (!response.ok) {
                                throw new Error('Failed to edit meal');
                            }
                            // Disable Edit Meal button and enable Add Meal button
                            buttonEdit.disabled = true;
                            buttonAdd.disabled = false;
                            // Clear the form fields
                            foodElement.value = '';
                            timeElement.value = '';
                            caloriesElement.value = '';
                        })
                        .catch(error => {
                            console.error('Error editing meal:', error);
                        });
                    };
                });
            }
        })
        .catch(error => console.log(error))
});


buttonAdd.addEventListener('click', function() {
   
    fetch(baseUrl, {
        method: 'POST',
        body: JSON.stringify({
            "food": foodElement.value,
            "time": timeElement.value,
            "calories": caloriesElement.value,
        })
    })
        
    foodElement.value = '';
    timeElement.value = '';
    caloriesElement.value = '';
})

