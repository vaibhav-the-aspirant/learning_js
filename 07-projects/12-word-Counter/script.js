const textBox = document.querySelector('#textarea')
const counter = document.querySelector('#liveCount')


textBox.addEventListener('input', (e)=>{
    let wordCount = 0;
    let text = e.target.value
        .replaceAll('\n', ' ')
        .trim();

    for (let i = 0; i < text.length; i++) {
        if (i === 0 && text[i] !== ' ') {
            wordCount = 1;
        } 
        else if (text[i] !== ' ' && text[i - 1] === ' ') {
            wordCount++;
        }
    }

    counter.innerHTML = wordCount;
})




