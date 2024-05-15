function printMatrix(n) {
    let matrix = '';

    // Iterate over rows
    for (let i = 0; i < n; i++) {
        // Iterate over columns
        for (let j = 0; j < n; j++) {
            // Append the number followed by a space to the matrix string
            matrix += n + ' ';
        }
        // Add a newline character after each row
        matrix += '\n';
    }

    // Print the entire matrix
    console.log(matrix);
}

printMatrix(7);