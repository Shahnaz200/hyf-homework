//housePrice = volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300;

//Peter's calculation
const width = 8;
const height = 10;
const deep = 10;
const gardensize = 100;

let houseVolumePeter = width * height * deep;

console.log(houseVolumePeter);

let calculatedHousePrice = houseVolumePeter * 2.5 * 1000 + gardensize * 300;

console.log(calculatedHousePrice);

const realHousePrice = 2500000;

if (realHousePrice > calculatedHousePrice) {
  console.log(realHousePrice > calculatedHousePrice);
  console.log(realHousePrice - calculatedHousePrice);
} else {
  calculatedHousePrice - realHousePrice;
}

console.log(
  `Peter paid ${realHousePrice - calculatedHousePrice} less then original price`
);

//Julia

const width2 = 5;
const height2 = 11;
const deep2 = 8;
const gardensize2 = 70;

let houseVolumeJulia = width2 * height2 * deep2;

console.log(houseVolumeJulia);

calculatedHousePrice = houseVolumeJulia * 2.5 * 1000 + gardensize2 * 300;

console.log(calculatedHousePrice);

const realHousePriceJulia = 1000000;

if (realHousePriceJulia > calculatedHousePrice) {
  console.log(realHousePriceJulia > calculatedHousePrice);
} else {
  calculatedHousePrice - realHousePriceJulia;
}

console.log(calculatedHousePrice - realHousePriceJulia);
console.log(
  `Julia paid ${
    calculatedHousePrice - realHousePriceJulia
  } more then original price`
);
