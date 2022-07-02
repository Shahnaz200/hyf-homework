

const spiritName = ["The White Butterfly" , "The Funny Dragon" , " The Crazy Worm" , " The Sleepy Snail" , " The Lovely Panda" , "  The Wet Seadog" , " The Huge Tiger" , " The Awesome Chameleon" , " The Kindly Siberian Husky" , " The Beautiful Fresian Horse"]


const enterNameInput = document.getElementById('name');

//get random spirit name 
function getspiritName() {

const random = Math.floor(Math.random() * spiritName.length);
console.log(`${massage.value} -${spiritName[random]}`)


function myFunction() {
 document.getElementById("getMassage").innerHTML = `${massage.value} -${spiritName[random]}`;

}
// when user want to click btn
const element = document.getElementById("myBtn");
element.addEventListener("click", myFunction());


}
// when user requited massage
function namefunction(){
let massage = document.getElementById("massage").required;
document.getElementById("getMassage").innerHTML = massage;

}


//when user want add name
function namefunction2(){
 if (!massage.value){getMassage.innerHTML ="Enter name";
return;
 }
}

 

 



