//housePrice = volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300;

/*
width = w
height = h
deep = d
gardensize = g
*/


//Peter's calculation
var w = 8
var h = 10
var d = 10
var g = 100




let houseVolumePeter = w * h * d

console.log(houseVolumePeter)

let  calculatedHousePrice = houseVolumePeter * 2.5 * 1000 + g * 300;

console.log(calculatedHousePrice)


const  realHousePrice = 2500000

 if (realHousePrice > calculatedHousePrice ) 
 console.log (realHousePrice > calculatedHousePrice )
 console.log(realHousePrice - calculatedHousePrice )



 console.log("Peter paid 470000 less then original price")





//Julia

w = 5
h = 11
d = 8
g = 70


let houseVolumeJulia = w * h * d

console.log(houseVolumeJulia)

calculatedHousePrice = houseVolumeJulia * 2.5 * 1000 + g * 300;

console.log(calculatedHousePrice)


const realHousePriceJulia = 1000000




if (realHousePrice > calculatedHousePrice ) 
 console.log (realHousePriceJulia > calculatedHousePrice ) 

 else ( calculatedHousePrice - realHousePriceJulia)

 console.log (calculatedHousePrice - realHousePriceJulia)
 console.log("Julia paid 121000 more then original price")
 






