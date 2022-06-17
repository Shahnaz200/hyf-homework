let name = ""
const todoList = []

function getReply(command) {
 if (typeof command !== "string" || command === "") {
   return "Please enter a valid command"
 }
/* let num1 = x;
let num2 = y;*/
 switch(command){

   case "Hello my name is Benjamin":
     name = "Benjamin"
       return `Nice to meet you Benjamin`

   case "What is my name?":
       if(name !== ""){
         return "You didn't say your name yet"
       }
   case "Add Fishing to my todos":
        if (command !== "") {
        todoList.push("Fishing")
        return "Added Fishing to your todos"
   }
   
   case "Add Singing in the shower to my todos":
        if (command !== "") {
        todoList.push("Singing")
        return "Added Singing in the shower to your todos"
    }

    case "What on my todos":
    if (command !== "") {
    return `You have ${todoList.length} todos - ${todoList}`;
  }

    case "Removing Fishing from my todos" :
     if (command !== "") {
     const index = todoList.indexOf("Fishing");
     todoList.splice(index, 1);
      return `Fishing removed from your todos `;
   }

   case "What day is it today":
   if (command !== "") {
     const today = new Date();
     const monthNames = [
     "January",
     "February",
     "March",
     "April",
     "May",
     "June",
     "July",
     "August",
     "September",
     "October",
     "November",
     "December",
    ];
return`Today is ${today.getDate()} of ${monthNames[today.getMonth()]} ${today.getFullYear()}`;
}


   case "What is" :{
    if (command !== "") {
     const operator = prompt('Enter operator ( either +, -, * or / ): ');


     const number1 = parseFloat(prompt('Enter first number:'));
     const number2 = parseFloat(prompt('Enter second number:'));
     
     let result;
     

     if (operator == '+') {
         result = number1 + number2;
     }
     else if (operator == '-') {
         result = number1 - number2;
     }
     else if (operator == '*') {
         result = number1 * number2;
     }
     else {
         result = number1 / number2;
     }
     

     return (`${number1} ${operator} ${number2} = ${result}`);}
   }
  
     case "Set Timer" :
      if (command !== "") {
      setTimeout(console.log, 4 * 60 * 1000, "Timerdone")
      return "Timer set"
    
}
}
}

console.log(getReply("Hello my name is Benjamin")); // "Nice to meet you benjamin"
console.log(getReply("What is my name?")); // "Your name is Benjamin"
console.log(getReply("")); // "Please enter valid command"
console.log(getReply("Add Fishing to my todos"));//"Add Fishing to my todos"
console.log(getReply("Add Singing in the shower to my todos"));//"Add Singing in the shower to my todos"
console.log(getReply("Removing Fishing from my todos"));//"Removing Fishing from my todos"
console.log(getReply("What on my todos"));//"What on my todos"
console.log(getReply("What day is it today"));//"What day is it today"
console.log(getReply("Set Timer"));//"Set Timer"
console.log(getReply("What is"));//What is





 
