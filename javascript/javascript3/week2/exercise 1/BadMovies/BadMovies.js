document.body.style.backgroundColor = "skyBlue";
document.body.style.textAlign = "center";
document.body.style.listStyle = "none";


const myH2 = document.createElement("h2");
myH2.innerHTML = "Bad Movies";
myH2.style.color = "brown";
document.body.appendChild(myH2);






const movies = "https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json"

fetch(movies)
    .then(Response => Response.json())
    .then(movies => {
        const badMovies = movies.filter(movie => movie.rating <= 3);
        badMovies.forEach(movies => {

            const li = document.createElement("li");
            li.style.fontSize = "20px";
            li.style.color = "beige"
            li.innerHTML = `${movies.title} with ${movies.rating} rating`;
            myH2.appendChild(li);

        });
      })
