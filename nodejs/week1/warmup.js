const argv = process.argv.slice(2);
const sumArgv = argv.reduce((a, b) => Number(a) + Number(b));
const average = sumArgv / argv.length;

//What should happen if the provided arguments are not numbers
if (isNaN(average)) {
  console.log("You have Characters Pls Type Only Number!");
} else {
  console.log(`The Average Of ${sumArgv} Is ${average.toFixed(0)}`);
}

//What about if no arguments are provided (node avg.js)
