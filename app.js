const countdownEl = document.querySelectorAll('.items span')
const startBtn = document.querySelector('.startBtn')
const stopBtn = document.querySelector('.stopBtn')
const resetBtn = document.querySelector('.resetBtn')
let count = 240;
let time = count * 60;
let interval;

function updateCountdown() {
  const hours = Math.floor(time / 3600);
  const minutes = Math.floor((time % 3600) / 60);
  let seconds = time % 60;

  countdownEl[0].innerText = hours < 10 ? "0" + hours : hours;
  countdownEl[1].innerText = minutes < 10 ? "0" + minutes : minutes;
  countdownEl[2].innerText = seconds < 10 ? "0" + seconds : seconds;

  time--;

}

startBtn.addEventListener("click", ()=>{
  interval=setInterval(updateCountdown, 1000);
  stopBtn.style.display="block"
  startBtn.style.display="none"
})
stopBtn.addEventListener("click", ()=>{
  clearInterval(interval)
  stopBtn.style.display="none"
  startBtn.style.display="block"
})

resetBtn.addEventListener("click",()=>{        
  clearInterval(interval);
  hours=0;
  minutes=0;
  seconds=0;
  countdownEl[0].innerText ="0"+hours
  countdownEl[1].innerText ="0"+minutes
  countdownEl[2].innerText ="0"+seconds
  stopBtn.style.display="none"
  startBtn.style.display="block"
})