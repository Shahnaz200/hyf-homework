const keyword = document.getElementById("search");
const submitBtn = document.getElementById("searchbutton");
const amountOfGifs = document.getElementById("number-of-gifs");
const resualt = document.getElementById("resualt");

const apiKey = "HWjG59RbIS0dAffUvD1d98DDQC2kZcBW";

//searchbar and total of gifs
submitBtn.addEventListener("click", function() {
    const gifySearch = keyword.value;
    const gifyTotal = amountOfGifs.value;
 
    if(!gifySearch) {
     alert ("Pls Enter A Keyword")
     } else if(!gifyTotal){
      alert ("Pls Enter A Total Of Gifs You Want Thanks")
     } else {
        resualt.innerHTML = ""
        fetch(`http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=${apiKey}&limit=${gifyTotal}&q=${gifySearch}`)
            .then(response => response.json())
            .then(data => {
                displayGif(data);
            });
    }
})


//display the gifs
function displayGif(data) {
    data.data.forEach(dat => {
        const gifyUrl = dat.images.original.url;
        let newImage = document.createElement("img");
        newImage.setAttribute("src", gifyUrl)
        resualt.appendChild(newImage);
        console.log(gifyUrl)
    })
} 