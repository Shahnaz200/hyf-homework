
const danishWords= ['bil', 'plante', 'kaffe', 'bog', 'ø', 'planetarium'];
console.log(getShortestWord(danishWords));


function getShortestWord() {
  if(danishWords == null || danishWords.length < 1){
    return danishWords // handling empty array
  }
  
  let minLengthWord = danishWords[0]
  for (let i = 0; i < danishWords.length; i++) {
  if(danishWords[i].length < minLengthWord.length){
    minLengthWord = danishWords[i]
  }
  
  }
  return minLengthWord
}






