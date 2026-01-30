const textBox = document.querySelector('#textarea')
const liveCounter = document.querySelector('#liveCount')

textBox.addEventListener('input',(e)=>{
    const text = e.target.value
    console.log(text.length)
    let count = text.length;
    liveCounter.innerHTML = `${count}`
    if(count>60 && count <=80){
        liveCounter.style.color = '#ded337ff'
        textBox.style.color ='#ded337ff'
    }
    else if(count>80){
        liveCounter.style.color = 'red'
        textBox.style.color ='red'
        

    }
    else{
        liveCounter.style.color = 'gray'
        textBox.style.color ='black'
        
    }
}
)