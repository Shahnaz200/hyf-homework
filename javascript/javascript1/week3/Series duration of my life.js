const seriesDurations = [
 {
     title: "Matador",
     days: 1,
     hours: 0,
     minutes: 0,
 },
 {
     title: "the wizard",
     days: 3,
     hours: 0,
     minutes:10,
 },
 {
     title: "you",
     days: 2,
     hours: 5,
     minutes: 10,
 },
];

 //my age 80
lifespan = 80 * 365 ;
// how much take time of my life each of series
function percentage(array) {
 let sum = 0
 for (i = 0; i < array.length; i++){
  const totalDay = [];
        const percentage = [];
        totalDay[i] = (array[i].days + array[i].hours / 24 + array[i].minutes / 24 * 60 );
        percentage[i] = (totalDay[i] / lifespan) * 100;
        result = console.log(`${array[i].title} took ${percentage[i].toFixed(3)}% of my life.`);
       
        // in total how much take all  of them
        sum += totalDay[i];
        totalPercentage = (sum / lifespan) * 100;
 
 }
 
   console.log(`In total that is ${totalPercentage.toFixed(3)} of my life`);
   return result;
}
percentage(seriesDurations)
