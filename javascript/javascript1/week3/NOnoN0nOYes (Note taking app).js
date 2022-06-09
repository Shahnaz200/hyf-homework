const notes = [];

function saveNote(content, id) {
 return notes.push({ content, id });

}

saveNote("Pick up groceries", 1);
saveNote("Do laundry", 2);
saveNote("Eat my mommy", 3);
saveNote("Eat zebra", 4);
saveNote("Check my homework", 5);
saveNote("Go to bathroom", 6);
saveNote("Keep calm and drink caffe", 7);
saveNote("My mom is stupid from Aria", 8);
saveNote("Cook my dog that doesn't exist", 9);
saveNote("Play on my moms belly", 10);


console.log(notes); // [{content: 'Pick up groceries', id: 1}, {content: 'Do laundry', id: 2}]


function getNote(id) {
 if (typeof id !== "number" )
 return console.log("Error");

else {

 for ( let i = 0; i <= notes.length; i++){
  if (id == notes[i].id){
return console.log(notes[i]);
   }
  }
 }
}

getNote(5);


function logOutNotesFormatted() {
 for ( let i = 0; i < notes.length; i++){ 
  console.log(`The note with id: ${notes[i].id}, has the following note text: ${notes[i].content}.`)
 }

}

logOutNotesFormatted(); 

//make date feature
function newDate(){
var date = new Date();
var day = date.getDate();
var month = date.getMonth()+1;
var year = date.getFullYear();
console.log(date  + day +"/" + month + "/" +year)}
newDate()