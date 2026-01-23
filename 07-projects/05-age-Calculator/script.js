const button = document.querySelector('#btn')
const dob = document.querySelector('#birthday')
const result = document.querySelector('#result')


button.addEventListener('click', () => {
    const birth = dob.value 
    const birthday = new Date(birth)
    const presentDate = new Date()
    let age = presentDate.getFullYear() - birthday.getFullYear();
    const birthdayThisYear = new Date(presentDate.getFullYear(),birthday.getMonth(), birthday.getDate())
    if(birthdayThisYear > presentDate){
        age--;
    }
    result.innerText = `Your age is ${age} years old`
})



