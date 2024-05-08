function search() {
   let listElements = document.getElementsByTagName('li');
   let cities = Array.from(listElements).map(city => city.textContent.toLowerCase()); // Convert city names to lowercase for case-insensitive search
   let searchValue = document.getElementById('searchText').value.toLowerCase(); // Convert search value to lowercase for case-insensitive search
   let matches = [];

   // Clear previous search results
   for (const element of listElements) {
      element.style.fontWeight = 'normal'; // Reset font weight
      element.style.textDecoration = 'none'; // Reset text decoration
   }

   // Find matches and style them
   for (let i = 0; i < cities.length; i++) {
      if (cities[i].includes(searchValue)) {
         matches.push(listElements[i].textContent); // Store matching city name
         listElements[i].style.fontWeight = 'bold'; // Bold matching city name
         listElements[i].style.textDecoration = 'underline'; // Underline matching city name
      }
   }

   // Display number of matches
   let resultElement = document.getElementById('result');
   resultElement.textContent = `${matches.length} matches found`;
}
