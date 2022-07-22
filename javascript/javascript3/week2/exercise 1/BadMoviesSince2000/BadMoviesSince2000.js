document.body.style.backgroundColor = "skyBlue";
document.body.style.textAlign = 'center';
document.body.style.listStyle = "none";



const BadMvSince2000 = document.createElement("h2");
BadMvSince2000.innerHTML = "Bad Movies Since Year 2000"
BadMvSince2000.style.color = "brown"
document.body.appendChild(BadMvSince2000);

const movies = "https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json"


fetch(movies)
    .then(Response => Response.json())
    .then(movies => {
        const badMovies = movies.filter(movie => movie.year >= 2000);
        badMovies.forEach(movies => {

            const li = document.createElement("li");
            li.style.fontSize = "20px";
            li.style.color = "beige"
            li.innerHTML = `${movies.title} Released In ${movies.year}`;
            BadMvSince2000.appendChild(li);

        });
      })


