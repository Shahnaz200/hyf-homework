let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let isOdd = (numbers) => isOdd(numbers) === 'NaN' ? isOdd(numbers) : !isOdd(numbers);
let oddNumbers = numbers.filter(number => {
  return number % 2 !== 0;
});

let doubled = oddNumbers.map(function (numbers){ 
 return numbers * 2;
})



console.log("The doubled numbers are", doubled); // [2, 6, 10, 14, 18]