const productSearch = document.getElementById("searchInput");
let prodUl = document.createElement("ul");
prodUl.classList.add("ulSyle");
document.body.appendChild(prodUl);

class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  convertToCurrency(currency) {
    const currencyApi = `https://api.currencyapi.com/v3/latest?apikey=HwPYsMxOHWoGqMN77pEu8FzynXTbjUyKgyggc1Yz&currencies=${currency}&base_currency=DKK`;
    fetch(currencyApi)
      .then((response) => response.json())
      .then((currencyData) => {
        const currencyPriceAndProdName = document.createElement("h3");
        const priceinCurrency = +(
          this.price * currencyData.data[currency].value
        ).toFixed(0);
        currencyPriceAndProdName.innerHTML = `Product Name: ${this.name} Price In ${currency}: ${priceinCurrency}`;
        document.body.appendChild(currencyPriceAndProdName);
      });
  }
}

class ShoppingCart {
  constructor() {
    this.products = [];
  }

  addProduct(product) {
    this.products.push(product);
  }

  removeProduct(product) {
    const productIndex = this.products.indexOf(product);
    this.products.splice(productIndex, 1);
  }

  getTotal() {
    let total = 0;
    this.products.forEach((product) => {
      total += product.price;
    });
    return total;
  }

  searchProduct(productName) {
    const productsCopy = this.products.map((product) => product);
    if (productName !== "") {
      this.products = this.products.filter((product) =>
        product.name.includes(productName)
      );
      prodUl.innerHTML = "";
      this.renderProducts();
      this.products = productsCopy;
    } else {
      prodUl.innerHTML = "";
      this.renderProducts();
    }
  }

  renderProducts() {
    if (this.products.length !== 0) {
      this.products.forEach((product) => {
        const prodLi = document.createElement("li");
        prodLi.innerHTML = `Product: ${product.name}, Price: ${product.price} kr`;
        prodUl.appendChild(prodLi);
      });
    }
    const total = document.getElementById("TotalProducts");
    const totalPrice = document.getElementById("Totalprice");
    total.innerHTML = `Number of Products : ${this.products.length}`;
    totalPrice.innerHTML = `Total Price : ${this.getTotal()}`;
  }

  getUser(user) {
    return fetch(`https://jsonplaceholder.typicode.com/users/${user}`);
  }
}

const shoppingCart = new ShoppingCart();
const schoolBag = new Product("schoolbag", 500);
const iphone = new Product("iphone", 9500);
const laptop = new Product("laptop", 4000);
const purse = new Product("purse", 1000);
const tablet = new Product("tablet", 2700);
const plant = new Product("plant", 150);

shoppingCart.addProduct(schoolBag);
shoppingCart.addProduct(iphone);
shoppingCart.addProduct(laptop);
shoppingCart.addProduct(purse);
shoppingCart.addProduct(tablet);
shoppingCart.addProduct(plant);
// shoppingCart.removeProduct(laptop); //works just not using
plant.convertToCurrency("USD");
laptop.convertToCurrency("USD");
tablet.convertToCurrency("USD");
purse.convertToCurrency("USD");
iphone.convertToCurrency("USD");
schoolBag.convertToCurrency("USD");

productSearch.addEventListener("input", () => {
  const productSearchValue = productSearch.value;
  shoppingCart.searchProduct(productSearchValue);
});

shoppingCart
  .getUser(3)
  .then((response) => response.json())
  .then((data) => {
    const userName = document.getElementById("Username");
    userName.innerHTML = `Username: ${data.username}`;
    shoppingCart.renderProducts();
  });
