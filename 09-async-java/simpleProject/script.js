const startButton = document.querySelector('#start')
const stopButton = document.querySelector('#stop')
const body = document.querySelector('body')
let changeBackgroundColor 
let isChangingColor = false

startButton.addEventListener('click', () => {
    if(!isChangingColor){
        changeBackgroundColor = setInterval(function(){
        const red = Math.floor(Math.random()*256)+1
        const blue = Math.floor(Math.random()*256)+1
        const green = Math.floor(Math.random()*256)+1
        console.log('vaibhav')
        body.style.backgroundColor = `rgb(${red},${green},${blue})`
        },1000)
        isChangingColor = true
    }
})

stopButton.addEventListener('click', () => {
    clearInterval(changeBackgroundColor)
    isChangingColor = false
})

