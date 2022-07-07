console.log("Script Loaded!!");

function consoleLogTime(delay = 0, stringToLog = "") {
 if (typeof delay !== "number" || typeof stringToLog != "string") {
   console.log("invalid arguments");
   return;
 }

 setTimeout(() => { console.log(stringToLog); }, delay * 1000);
}

consoleLogTime(2.5, "Called after 2.5 seconds");
function delayButtonClicked() {

 consoleLogTime(2.5, "Called after 2.5 seconds");
  consoleLogTime(5, "Called after 5 seconds");
}

const btnMessage = document.getElementById("btnmessage");

btnMessage.addEventListener("click", () =>
 
consoleLogTime(5, "Called after 5 seconds")
);


const earth = () => console.log("Earth");
const saturn = () => console.log("Saturn");

const planetLogFunction = (functionName) => functionName();

planetLogFunction(earth);
planetLogFunction(saturn);

const myDiv = document.getElementById("div")
const btnLocation = document.createElement('button')
btnLocation.innerHTML = "Log Your Location";

myDiv.appendChild(btnLocation);

btnLocation.addEventListener('click', function () {
    navigator.geolocation.getCurrentPosition(function (position) {
        let la = position.coords.latitude;
        let lo = position.coords.longitude;
        displayOutput.innerHTML = `<p>This is Latitude of Location is : ${la}</p> <p>This is Longitude of Location is : ${lo}</p>`;

    })
})

function runAfterDelay(delay, callback) {
 const time = delay * 1000
 return setTimeout(callback, time);
}

runAfterDelay(4, function () {
 console.log('should be logged after 4 second')
});

const dblClick = document.querySelector('#myButton');

dblClick.addEventListener('dblclick', function (e) {
  alert("You Double Clicked")
});


function logFunnyJoke() {
    return console.log("Funny joke");
}




function logBadJoke() {
    return console.log("Bad joke");
}

function jokeCreator(shouldTellFunnyJoke) {
    return shouldTellFunnyJoke ? logFunnyJoke() : logBadJoke();
}

jokeCreator(false);

