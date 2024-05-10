function processMovies(input) {
    let movies = [];

    function addMovie(movieName) {
        movies.push({ name: movieName });
    }

    function addDirector(movieName, director) {
        let movie = movies.find(movie => movie.name === movieName);
        if (movie) {
            movie.director = director;
        }
    }

    function addDate(movieName, date) {
        let movie = movies.find(movie => movie.name === movieName);
        if (movie) {
            movie.date = date;
        }
    }

    for (let command of input) {
        let tokens = command.split(' ');

        if (tokens[0] === 'addMovie') {
            addMovie(tokens.slice(1).join(' '));
        } else {
            let movieNameIndex = tokens.indexOf('directedBy');
            let movieName;
            if (movieNameIndex === -1) {
                movieNameIndex = tokens.indexOf('onDate');
            }
            if (movieNameIndex !== -1) {
                movieName = tokens.slice(0, movieNameIndex).join(' ');
            }

            if (tokens.includes('directedBy')) {
                let director = tokens.slice(movieNameIndex + 1).join(' ');
                addDirector(movieName, director);
            } else if (tokens.includes('onDate')) {
                let date = tokens.slice(movieNameIndex + 1).join(' ');
                addDate(movieName, date);
            }
        }
    }

    // Filter out movies that don't have all info (name, director, and date)
    let validMovies = movies.filter(movie => movie.name && movie.director && movie.date);
    
    // Print validMovies in JSON format
    validMovies.forEach(movie => console.log(JSON.stringify(movie)));
}

  

processMovies([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
    ]
    );