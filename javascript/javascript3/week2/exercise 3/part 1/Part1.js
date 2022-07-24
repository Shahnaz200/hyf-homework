let timeSecond = 3;
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
  timeH.innerHTML = "Called after 3 seconds";
}

function promiseTimeout(sec) {
return new Promise((resolve) => {
     setTimeout(function() {
         resolve()
     }, sec * 1000)
 })
}
promiseTimeout(timeSecond).then(() => {console.log(`Called after 3 seconds`);})

