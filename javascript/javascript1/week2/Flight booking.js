



function getFullname(firstname, surname,) {
 
 return `${firstname} ${surname}`;

}

var x = getFullname("Benjamin", "Hughes")
console.log(x)




var fullname1 = getFullname("Shahnaz", "Vatankhah"); 
var fullname2 = getFullname("Aria", "Chehrazi"); 
console.log(fullname1)
console.log(fullname2)

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
function getFullnameFormalGender(firstname, surname, useFormalName, womenName) {
 
 if(womenName) {
  return "Mrs" + " " +firstname + " " +surname;
 }
 
 else{
 
 return "Mr" + " " + firstname + " " +surname;

 }
}

var x = getFullnameFormalGender("Shahnaz", "Vatankhah","true","true")
console.log(x)

var x = getFullnameFormalGender("Aria", "Chehrazi","false","false")
console.log(x)


