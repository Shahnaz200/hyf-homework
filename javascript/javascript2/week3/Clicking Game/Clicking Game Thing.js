const btn = document.getElementById("startBtn");
let inputTime = document.getElementById('inputTime');
const timer = document.getElementById("timer");
const scoreS = document.getElementById("scoreS");
const scoreL = document.getElementById("scoreL");
const buttonForS = document.getElementById("right");
const buttonForL = document.getElementById("left");


let startNUmS = 0;
let startNUmL = 0;

btn.addEventListener("click", () => {
    let StartingSec = inputTime.value;
    ended = false;
    startGame()
    timer.innerHTML = `${StartingSec} : 00`;
    const countdown = setInterval(() => {
        StartingSec--;
        timer.innerHTML = `${StartingSec} : 00`;
        if (StartingSec <= 0) {
            ended = true;
            clearInterval(countdown);
            endGame();
        }
    }, 1000);
})
function startGame() {
    document.addEventListener("keypress", (event) => {
        if (event.code !== "KeyS" && event.code !== "KeyL") {
            alert("Press either L or S")
        } else if (event.code === "KeyS") {
            scoreS.innerHTML = startNUmS++;
            console.log(event);
        } else if (event.code === "KeyL") {
            scoreL.innerHTML = startNUmL++;
        }

    });
};

const showResult = document.getElementById("result")

function endGame() {
    if (startNUmS === startNUmL) {
        showResult.innerHTML = "Draw!!";
    } else if (startNUmS > startNUmL) {
     showResult.innerHTML = "S Wins!!";

    } else {
     showResult.innerHTML = "L Wins!!";

 
    }
     if (inputTime.value >= 0) {
        document.getElementById("ShowResult").style.visibility = "visible"
       }
    
  
    startNUmS = "";
    startNUmL = "";
}

   
    


const openModalButtons = document.querySelectorAll('[data-modal-target]')
const overlay = document.getElementById('overlay')

openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget)
    openModal(modal)
  })
})

overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.active')
  modals.forEach(modal => {
    closeModal(modal)
  })
})

function openModal(modal) {
  if (modal == null) return
  modal.classList.add('active')
  overlay.classList.add('active')
}

function closeModal(modal) {
  if (modal == null) return
  modal.classList.remove('active')
  overlay.classList.remove('active')
}

