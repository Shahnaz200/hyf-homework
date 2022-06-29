

console.log("Script loaded");
//const products = getAvailableProducts();


//document.querySelector(".hyf").style.backgroundcolor = "gray";
document.querySelector(".hyf").style.color = "white";
document.querySelector("ul id").style.backgroundcolor ="yellow"

function renderProducts(products){
const Ul = document.getElementById('product');

//function myFunction(){
 //var x = document.createElement("li");
 //Ul.appendChild(x).style.border = 'solid', 
 //x.style.padding ='12px';
 //const title = document.createElement('li');
    //const price = document.createElement('li');
    //const rating = document.createElement('li');
    //title.innerHTML = `Name: ${oneProduct.name}`
    //price.innerHTML = `Price: ${oneProduct.price}`
    //rating.innerHTML = `Rating: ${oneProduct.rating}`
   // x.appendChild(price).style.background ='green'
   // x.appendChild(rate).style.background = 'green'
//}
//}

//renderProducts(products);
for (let i = 0; i <= products.length; i++) {
    const productNames = products[i];
    const productTitle = document.createElement("h2");
    const productPrice = document.createElement("p");
    const productRating = document.createElement("p");
    productTitle.innerText = productNames.name;
    productPrice.innerText = "Price: " + productNames.price;
    productRating.innerText = "Rating: " + productNames.rating;
    let list = document.createElement("li");
    list.appendChild(productTitle);
    list.appendChild(productPrice);
    list.appendChild(productRating);
    Ul.appendChild(list);
    }
}
    renderProducts(products);