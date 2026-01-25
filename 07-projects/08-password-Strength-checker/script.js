const pass = document.querySelector('#password')
const strengthMessage = document.querySelector('#result')
const formBody = document.querySelector('.form')
const rulesContainer = document.querySelector('#rules');


pass.addEventListener('input',(e) => {
    rulesContainer.innerHTML = "";

    const password = e.target.value


// hasLowerCase(password)
// hasUpperCase(password)
// hasNumber(password)
// hasSpecialCharacter(password)
// hasSufficientLength(password)
// console.log(hasLowerCase(password))
// console.log(hasUpperCase(password))
// console.log(hasNumber(password))
// console.log(hasSpecialCharacter(password))
// console.log(hasSufficientLength(password))


//calculating strength
const rules = [
  { label: "At least one lowercase letter", passed: hasLowerCase(password) },
  { label: "At least one uppercase letter", passed: hasUpperCase(password) },
  { label: "At least one number", passed: hasNumber(password) },
  { label: "At least one special character", passed: hasSpecialCharacter(password) },
  { label: "Minimum 8 characters", passed: hasSufficientLength(password) }
];

let strength = 0;
rules.forEach(rule => {
    if(rule.passed === true){
        strength++;
    }
});
console.log(strength)

//mapping strength
const strengthMeasure = {
    1: 'Very Weak',
    2: 'Weak',
    3: 'Medium',
    4: 'Strong',
    5: 'Very Strong'
}

//showing strength 
if(strengthMeasure[strength] === undefined){
    strengthMessage.innerHTML = ""
}else{
strengthMessage.innerHTML = strengthMeasure[strength]
}


//deciding color of strength message
if(strength <= 2){
    strengthMessage.style.color = "red"
}
else if(strength===3){
    strengthMessage.style.color = "#92921c"
}
else if(strength>3){
    strengthMessage.style.color = "green"
}

const isEmpty = password.length === 0;

//showing rules that does not met the requirements 
rules.forEach(rule => {
  if (isEmpty) {
    rulesContainer.innerHTML += `<p style="color: #777;">${rule.label}</p>`;
  } else if (!rule.passed) {
    rulesContainer.innerHTML += `<p style="color: red;">❌ ${rule.label}</p>`;
  }
});

//how many rules unmet --> traverse the result array to find out

})






function hasUpperCase(str){
    for (const char of str) {
    //check if char is in uppercase
    if(char>='A' && char<='Z'){

        return true;
    }
}
return false
}

function hasLowerCase(str){
    for (const char of str) {
    //check if char is in uppercase
    if(char>='a' && char<='z'){
        return true;
    }
}
return false
}

function hasNumber(str){
    for (const char of str) {
    //check if char is in uppercase
    if(char >= '0' && char <= '9'){

        return true;
    }
}
return false
}

function hasSpecialCharacter(str){
    for (const char of str) {
        const isLower = char>='a' && char<='z'
        const isUpper = char>='A' && char<='Z'
        const isNumber = char>='0' && char <='9'
        if(!isLower && !isUpper && !isNumber){
            return true
    }
    }
    return false
}

function hasSufficientLength(str){
    if(str.length >= 8){
        return true
    }
    return false
}
