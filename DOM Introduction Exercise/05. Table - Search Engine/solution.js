function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
       // Get the search input field value
      let searchText = document.getElementById('searchField').value.trim().toLowerCase();

      // Get all rows (excluding the first row which contains headers) in the table body
      let rows = document.querySelectorAll('tbody tr'); // Skip the first row
      let arrayRows = Array.from(rows)
      // Loop through each row
      arrayRows.forEach(function(row) {
         // Remove any existing 'select' class
         row.classList.remove('select');

         // Get all cells in the current row
         let cells = row.querySelectorAll('td');

         // Flag to check if the row contains the search text
         let containsSearchText = false;
         let arrayCells = Array.from(cells)
         // Loop through each cell in the current row
         arrayCells.forEach(function(cell) {
            // Get the text content of the current cell
            let cellText = cell.textContent.toLowerCase();

            // Check if the cell text contains the search text as a full word or single letter
            if (cellText.includes(searchText) || cellText.split(' ').some(word => word.startsWith(searchText))) {
                  containsSearchText = true;
            }
         });

         // If the row contains the search text, add the 'select' class
         if (containsSearchText) {
            row.classList.add('select');
         }
      });

      // Clear the input field after search
      document.getElementById('searchField').value = '';

      
}
}
