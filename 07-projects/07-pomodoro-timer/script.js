const timer = document.querySelector('#timer')
const start = document.querySelector('#start')
const stop = document.querySelector('#stop')
const reset = document.querySelector('#reset')
let time;

let timeLeft = 1500;
let isRunning = false;

start.addEventListener('click', () => {
    if(!isRunning){
    time = setInterval(() => {
        
        if(timeLeft == 0){
            alert("Time Over!")
            clearInterval(time)
            isRunning = false
            timer.innerHTML = '00:00'
            timeLeft= 1500
        }
        else {
        timeLeft--
        console.log(timeLeft)
        let minutes = Math.floor(timeLeft/60)
        let seconds = (timeLeft%60);
        timer.innerHTML = `${String(minutes).padStart(2,'0')}:${String(seconds).padStart(2,'0')}`}
    },1000)
}
    isRunning = true
})

stop.addEventListener('click',() => {
    clearInterval(time)
    isRunning = false
})

reset.addEventListener('click',() => {
    timeLeft = 1500;
    let minutes = Math.floor(timeLeft/60)
    let seconds = (timeLeft%60);
    timer.innerHTML = `${String(minutes).padStart(2,'0')}:${String(seconds).padStart(2,'0')}`
    clearInterval(time)
    isRunning = false
})


