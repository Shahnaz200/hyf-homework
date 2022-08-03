
 

 



//first way
 
function countdanishLettersRegex(danishString) {

 let matchingInstances = danishString.match(/[æåø]/gi);

 if(matchingInstances){  

      console.log(`total ${matchingInstances.length}: {${matchingInstances} } `) 
     return matchingInstances.length
 }
 else {
     return 0
 }
}
const danishString = "Jeg har en blå bil";
countdanishLettersRegex(danishString); // returns {total: 1, å: 1}

const danishString2 = "Blå grød med røde bær";
countdanishLettersRegex(danishString2); // returns {total: 4, æ: 1, ø: 2, å: 1}






//second way but it doesn't work...please help me....

function CountDanskOrd(dankString){
  let count = 0;
  const arr = dankString.split('')

  for (let i =0 ; i< dankString.length;i++){

   if (arr[i]=== "æ" || arr[i]=== "å" || arr[i]=== "ø") 
           {
    count += 1

   }
   else{
    return 0
   }
  }
  return count
}


const danskString = " vi går det";
CountDanskOrd(danskString);

const danskString3 = "jeg købte grøn jække";
CountDanskOrd(danskString3);
