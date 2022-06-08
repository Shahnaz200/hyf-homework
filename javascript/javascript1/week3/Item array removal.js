const names = [
 "Peter",
 "Ahmad",
 "Yana",
 "kristina",
 "Rasmus",
 "Samuel",
 "katrine",
 "Tala",
];
const nameToRemove = "Ahmad";
// Write some code here
function removeName(name) {
 if (arguments.length < 1 || typeof name != "string") {
   return;
 }
 if (names.indexOf(name) === -1) {
   return;
 }
 names.splice(names.indexOf(name), 1);
}
removeName(nameToRemove);
// Code done
console.log(names); // ['Peter', 'Yana', 'kristina', 'Rasmus', 'Samuel', 'katrine', 'Tala']