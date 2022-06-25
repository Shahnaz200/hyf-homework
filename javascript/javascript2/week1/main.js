

console.log("Script loaded");
const products = getAvailableProducts();


document.querySelector(".hyf").style.backgroundcolor = "gray";
document.querySelector(".hyf").style.color = "white";
document.querySelector("ul id").style.backgroundcolor ="yellow"

function renderProducts(products){
const Ul = document.getElementById('product');

function myFunction(){
 var x = document.createElement("li");
 Ul.appendChild(x).style.border = 'solid', 
 x.style.padding ='12px';
 const title = document.createElement('li');
    const price = document.createElement('li');
    const rating = document.createElement('li');
    title.innerHTML = `Name: ${oneProduct.name}`
    price.innerHTML = `Price: ${oneProduct.price}`
    rating.innerHTML = `Rating: ${oneProduct.rating}`
    x.appendChild(price).style.background ='green'
    x.appendChild(rate).style.background = 'green'
}
}

renderProducts(products);
