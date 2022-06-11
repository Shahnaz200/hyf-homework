const candies = {
Sweet: 0.5,
Chocolate: 0.7, 
Toffee: 1.1,
ChewingGum: 0.03
}


const buyCandyPrices = []


function addCandy(candyType, weight) {
 if (typeof candyType !== 'string' || typeof weight !== 'number') {
  console.log('Please enter a valid value!');
} else {
  buyCandyPrices.push(weight * candies[candyType]);
 }
}



addCandy("Sweet" , 20)
addCandy("sweet" , 20)
addCandy("Chocolate", 50)
addCandy("Toffee", 120)
addCandy("ChewingGum", 40)
addCandy("Sweet" , 36)
addCandy("Chocolate", 93)
addCandy("Toffee", 23)
addCandy("ChewingGum", 70)

console.log(buyCandyPrices);

const amountToSpend = Math.random() * 100
const sum = buyCandyPrices[0]


console.log(amountToSpend);


function canBuyMoreCandy() {
 for (let i = 1; i < buyCandyPrices.length; i++) {
   if (sum <= amountToSpend) {
     console.log('You can buy more, so please do!');
     sum += buyCandyPrices[i];
     console.log(`You bought ${i} candy`);
   } else {
     console.log('Enough candy for you!');
   }
 }
 return sum;
}

console.log(canBuyMoreCandy());