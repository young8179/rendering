
function renderMovies(movies) {
    let htmlString = "";
    for (let i = 0; i < movies.length; i++) {
        const movie = movies[i];
        htmlString += `
        <div class="rounded" style="margin: 20px; display: flex; width: 600px; background-color: lightgray; padding: 10px;">
            <img style="width: 250px; margin: 10px;" src="${movie.poster}">
            <div class="rounded" style="width: 500px; margin: 10px; background-color: white; text-align: left; padding: 10px;">
                <p style="font-weight: bold; font-size: 30px; margin-bottom: 0px;">${movie.title}</p>
                <p style="margin-top: 0px; font-size: 18px;">${movie.year}</p>

                <p style="margin-bottom: 0px; font-size: 30px;">IMDB:</p>
                <p style="margin-top: 0px; font-size: 30px;">${movie.imdbRating} / 10</p>

                <p style="margin-bottom: 0px; font-size: 30px;">Rotten Tomatoes:</p>
                <p style="margin-top: 0px; font-size: 30px;">${movie.rottenTomatoesRating * 100}%</p>
            </div>
        </div>
        `
        
    }
    
    return `
        <div class="text-center mt-5">
            ${htmlString}
        </div>
    `
}

function movies() {
    var content = document.getElementById('content');

    var moviesAbstraction = [
        {
            title: "The Dark Knight",
            year: 2008,
            imdbID: "tt0468569",
            poster: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
            imdbRating: 9,
            rottenTomatoesRating: 0.94
        },
        {
            title: "The Dark Knight Rises",
            year: 2012,
            imdbID: "tt1345836",
            poster: "https://m.media-amazon.com/images/M/MV5BMTk4ODQzNDY3Ml5BMl5BanBnXkFtZTcwODA0NTM4Nw@@._V1_SX300.jpg",
            imdbRating: 8,
            rottenTomatoesRating: 0.82
        },
        {
            title: "The Incredibles",
            year: 2004,
            imdbID: "tt0317705",
            poster: "https://m.media-amazon.com/images/M/MV5BMTY5OTU0OTc2NV5BMl5BanBnXkFtZTcwMzU4MDcyMQ@@._V1_SX300.jpg",
            imdbRating: 9,
            rottenTomatoesRating: 0.91
        }
    ]

    content.innerHTML = renderMovies(moviesAbstraction);

}