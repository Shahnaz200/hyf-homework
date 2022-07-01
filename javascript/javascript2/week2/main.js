console.log('Script loaded');

const products = getAvailableProducts();
console.log(products)

const productsUl = document.querySelector('section.products ul');
console.log(productsUl);

// make input searching
function myfunction(){ 
let input = document.getElementById('myInput');
let searchNameInput = document.getElementById('search-input')
let  displayOutput = document.getElementById('output-search');
let textNameValue = searchNameInput.value;
searchNameInput.addEventListener('keyup', function (textNameValue) {
 textNameValue = searchNameInput.value;
 const rander = products.filter(list => list.name.toLowerCase().includes(textNameValue.toLowerCase()))
 if (!textNameValue) { alert = 'Enter your event'
   displayout.style = 'none'
 
 }
 else {
   displayOutput.innerHTML = rander.map(list => `<li style = "list-style: none;">Product Name: ${list.name}</br>
   <option Product Price: ${list.price}</option> </br>
   <option Product Rating: ${list.rating}</option></li>`)
  }
 })
}






function renderProducts(products) {
 products.forEach(product => {
     const li = document.createElement('li');

     let shipsToHTML = '';
     product.shipsTo.forEach(country => shipsToHTML += `<li>${country}</li>`);

     li.innerHTML = `
         <ul>
             <li>${product.name}</li>
             <li>${product.price}</li>
             <li>${product.rating}</li>
             <ul class="ships-to">${shipsToHTML}</ul>
         </ul>
     `;
     productsUl.appendChild(li);
 });
}



renderProducts(products);

//sort product by max. prices
let maxPrice = store.map((product) => product.price );
maxPrice = math.max(maxPrice);
maxPrice = math.ceil(maxPrice/100);
priceInput.value = maxPrice;
priceInput.max = maxPrice;
priceInput.min = 0;
pricevalue.textContent = 'value : ${maxPrice}';
let newStore = store.filter((product) => product.price / 100 <= value);
display(newStore = store, getElement('.products-container'));
if ( newStore.length < 1){ const  products = getElement('.products-container');
products.innerHTML = '<h3 class ="filter- error> sorry , no products matched your search<h3>'}
