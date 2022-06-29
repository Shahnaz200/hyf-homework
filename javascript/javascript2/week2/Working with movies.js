const movies = [
{"title": "'71","year": 2014,"rating": 7.2,"votes": 41702,"running_times": 5940},
{"title": "'A' gai wak","year": 1983,"rating": 7.4,"votes": 11942,"running_times": 6300},
{"title": "'Breaker' Morant","year": 1980,"rating": 7.9,"votes": 10702,"running_times": 6420},
{"title": "'Crocodile' Dundee II","year": 1988,"rating": 5.5,"votes": 47180,"running_times": 6480},
{"title": "(500) Days of Summer","year": 2009,"rating": 7.7,"votes": 412368,"running_times": 5700},
{"title": "*batteries not included","year": 1987,"rating": 6.6,"votes": 25636,"running_times": 6360},
{"title": "...E tu vivrai nel terrore! L'aldilà","year": 1981,"rating": 6.9,"votes": 16484,"running_times": 5220},
{"title": "...and justice for all.","year": 1980,"rating": 7.4,"votes": 25408,"running_times": 7140},
{"title": "10","year": 1979,"rating": 6,"votes": 13152,"running_times": 7320},
{"title": "10 Cloverfield Lane","year": 2016,"rating": 7.2,"votes": 216151,"running_times": 6240},
{"title": "10 Items or Less","year": 2006,"rating": 6.7,"votes": 13342,"running_times": 4920},
{"title": "10 Things I Hate About You","year": 1999,"rating": 7.2,"votes": 247070,"running_times": 5820},
{"title": "10 Years","year": 2011,"rating": 6.1,"votes": 20790,"running_times": 6000},
{"title": "10,000 BC","year": 2008,"rating": 5.1,"votes": 114750,"running_times": 6540},
{"title": "100 Feet","year": 2008,"rating": 5.5,"votes": 10979,"running_times": 6240},
{"title": "100 Girls","year": 2000,"rating": 5.9,"votes": 19232,"running_times": 5640},
{"title": "101 Dalmatians","year": 1996,"rating": 5.7,"votes": 83245,"running_times": 6180},
{"title": "102 Dalmatians","year": 2000,"rating": 4.9,"votes": 28927,"running_times": 6000},
{"title": "11-11-11","year": 2011,"rating": 4,"votes": 11425,"running_times": 5400},
{"title": "11:14","year": 2003,"rating": 7.2,"votes": 40149,"running_times": 5700},
{"title": "12 Angry Men","year": 1957,"rating": 8.9,"votes": 518449,"running_times": 5760},
{"title": "12 Rounds","year": 2009,"rating": 5.6,"votes": 24457,"running_times": 6480}
]

//Create an array of movies containing the movies with a short title (you define what short means)
const shortestTitel = movies.filter(movie => movie.title.length <= 2)

console.log(shortestTitel)

// Create an array of movie titles with long movie titles

const longMovieTitle = movies.filter(movie => movie.title.length > 21)

console.log(longMovieTitle)


//Count the number of movies made between 1980-1989 (including both the years)


let CountMovies1980_1989 = movies.filter(movies => movies.year >= 1980 && movies.year <= 1989)
console.log(CountMovies1980_1989)




//Create a new array that has an extra key called tag. The tag is based on the rasist: Good (>= 7), Average (>= 4 and < 7), Bad (< 4)

//console.log(movies.map(key => {key.tag = 'tag'; return key;}))

const Tag = movies.map((movie) => {
 let rating =
  movie.rating >= 7
     ? "Good"
     : movie.rating >= 4 && movie.rating < 7
     ? "Average"
     :"Bad" 
movie.tag = rating;
 return movie;
});
console.log(Tag);


//Using chaining, first filter the movies array to only contain the movies rated higher than 6. Now map the movies array to only the rating of the movies.const highRatingMovies = movies
const highRateMovies = movies.filter(movies => movies.rating > 6)

console.log(highRateMovies)
//Count the total number of movies containing any of following keywords: Surfer, Alien or Benjamin. So if there were 3 movies that contained Surfer, 1 with Alien and 2 with Benjamin, you would return 6. Can you make sure the search is case insensitive?


const moviesWithKeyword = movies.filter(movie => 
    movie.title.match(/Surfer/i)).length +
    movies.filter(movie => movie.title.match(/Benjamin/i)).length +
    movies.filter(movie => movie.title.match(/Alien/i)).length;

console.log(`${moviesWithKeyword} movies contains following keywords: Surfer, Alien or Benjamin.`);


//Calculate the average rating of all the movies using reduce
// let totalRating = 0
// movies.forEach(movie => {totalRating += movie.rating / movies.length})

// console.log(totalRating);

let totalRating = movies.reduce((total, movie) => {
 return total + movie.rating / movies.length} , 0)

console.log(totalRating);

//Count the total number of Good, Average and Bad movies using reduce. A return could fx be {goodMovies: 33, averageMovies: 45, goodMovies: 123}




