let firstWords = [ "Easy" , "Awesome" , "Corporate" ,"Cool" , "Red" ,"Bad" ,"fantactic" , "Strong" , "Cute" , "successful"]



let secondWords = [ "Weak" , " Harible" ,"Perfect" , "School" , "Class" , "Classmate" ,"Roaud" , " Near" , "Street" , "Cooker"]

const randomNumber = Math.floor(Math.random() * 10);


let startupName = firstWords [randomNumber] + secondWords [randomNumber];


//console.log(startupName)
console.log('startupName: ' + startupName + ' contains ' + startupName.length + ' caracters.')


