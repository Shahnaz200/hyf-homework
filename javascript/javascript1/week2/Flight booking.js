/*var firstname = ["Benjamin" , "Aria" , "Shahnaz"];
var surname = ["Hughes" , "Chehrazi" , "Vatankhah"];

let Fullname1 = (firstname[1], surname[0])
//let Fullname2 = (surname[1])

console.log (Fullname1);
 
//for (var i=0 ;i<=3 ;i++);
*/



function getFullname(firstname, surname,) {
 
 return firstname + " " +surname;

}

var x = getFullname("Benjamin", "Hughes")
console.log(x)




var Fullname1 = getFullname("Shahnaz", "Vatankhah"); 
var Fullname2 = getFullname("Aria", "Chehrazi"); 
console.log(Fullname1)
console.log(Fullname2)

//formal fullname
var useFormalName = true;
function getFullname1(firstname, surname, useFormalName) {
 
 if(useFormalName) {
  return "Lord" + " " +firstname + " " +surname;
 }
 
 else{
 
 return firstname + " " +surname;

 }
}
var x = getFullname1("Benjamin", "Hughes",true)
console.log(x)

var x = getFullname1("Aria", "Chehrazi",false)
console.log(x)


//women part
var womenName = true;
function getFullname2(firstname, surname, useFormalName, womenName) {
 
 if(womenName) {
  return "Mrs" + " " +firstname + " " +surname;
 }
 
 else{
 
 return "Mr" + " " + firstname + " " +surname;

 }
}

var x = getFullname2("Shahnaz", "Vatankhah",true,true)
console.log(x)

var x = getFullname2("Aria", "Chehrazi",false,false)
console.log(x)


