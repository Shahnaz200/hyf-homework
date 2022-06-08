

 const travelInformation = {
  speed: 50,
  destinationDistance: 432,
};

function time(travelInformation) {

 const time = travelInformation.destinationDistance/travelInformation.speed;
 const hour = Math.floor(time);
const minute = Math.floor((time % 1)* 60);
 return `${hour} hours and ${minute} minutes`
}

 const travelTime = time(travelInformation);
console.log(travelTime); 



 