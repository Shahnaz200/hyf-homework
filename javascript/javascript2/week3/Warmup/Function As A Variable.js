//Part 1 Function Array
const x= () => {
 console.log("Its First item in array")
};

const y = () => {
 console.log("Its Second items in array")
};

const z= () => {
 console.log("Its Third item in array")
};

let array = [x(), y(), z()];
array.forEach((list) => {
   return list
});

//Part 2 Const Function and Normal Function

 const constFunction = function numberOfitem() { 
  return 'Its Return Const Function'; }
 console.log(constFunction())

 function numberOfitem() { 
  return 'Its Return Normal Function'; }
 console.log(numberOfitem())


//Part 3 Object Function
 const object = {
     food: 'rice',
     info : function(){
     return 'Rice Very Good'
     }
 }
 console.log(object.info()) 
