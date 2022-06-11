
const class07Students = [];
function addStudentToClass(studentName) {
  if (class07Students.includes(studentName)) {
return (`Student ${studentName} its already`);
  } else {
    if (
      (studentName !== '' && class07Students.length <= 5) ||
      studentName === 'Queen'
    ) {
      class07Students.push(studentName);
    } else if (class07Students.length >= 6) {
      return ("cannot add more to this class it's full");
    }
  }
}





addStudentToClass("");

addStudentToClass("Aria");

addStudentToClass("Aria");

addStudentToClass("Shahanaz");

addStudentToClass("Hassan");

addStudentToClass("Glora");

addStudentToClass("Daniel");

addStudentToClass("Dani");

addStudentToClass("Queen");

addStudentToClass("Marius");

console.log(class07Students);


function getNumberOfStudents() {

 return class07Students.length;
}



console.log(getNumberOfStudents())


