const button = document.querySelector('#roll-button')
let rollCount = 0;
const ul = document.querySelector('#roll-history')


button.addEventListener('click', () => {
    //random generate between 1 to 6
    const random = Math.floor((Math.random() * 6)) //1 to 6)
    const DICE_BASE = 9855;
    let uniCode = DICE_BASE + random;
    rollCount++;
    console.log(uniCode)
    //display in box
    const li = document.createElement('li')
    li.innerHTML = `Roll ${rollCount}: <span>&#${uniCode};</span>`
    ul.appendChild(li)
})