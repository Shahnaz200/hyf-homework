let timeSecond = prompt("How Many Seconds Please Only Numbers");


const timeH = document.querySelector("h1");

displayTime(timeSecond);

const countDown = setInterval(() => {
  timeSecond--;
  displayTime(timeSecond);
  if (timeSecond == 0 || timeSecond < 1) {
    endCount();
    clearInterval(countDown);
  }
}, 1000);

function displayTime(second) {
  const min = Math.floor(second / 60);
  const sec = Math.floor(second % 60);
  timeH.innerHTML = `
  ${min < 10 ? "0" : ""}${min}:${sec < 10 ? "0" : ""}${sec}
  `;
}

function endCount() {
  timeH.innerHTML = "I am called asynchronously";
}



async function delay(resolveAfter) {
    
 await new Promise((resolve, reject) => {

   
     setTimeout(function() {
         resolve()
     }, resolveAfter * 1000)
 })

}


delay(timeSecond).then(() => {console.log("I am called asynchronously");})
.catch(() => {console.log("it must be a number!")});


