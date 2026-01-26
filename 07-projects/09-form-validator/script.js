


//username declarations
const username = document.querySelector('#username')
let isUsernameValidated = false;
const userNameSpaceError = document.querySelector('#userNameSpaceErrorMessage')
const specialChar= document.querySelector('#userNameSpecialCharErrorMessage')
const userNameLength = document.querySelector('#userNameLengthErrorMessage')

//username
username.addEventListener('input',(e)=>{
    const value= e.target.value


    //check if space is present
    const space = hasSpace(value)

    //if yes -> display error saying- spaces not allowed.
    if(space){
        console.log(space)
        userNameSpaceError.innerHTML = 'No spaces allowed'
    }else {
        userNameSpaceError.innerHTML = ''
    }


    //check if character is anything else than number or letter
    const special = hasSpecialCharacter(value)
    //if yes -> display error saying - special characters not allowed
    if(special){
        console.log("special character entered!")
        specialChar.innerHTML = 'Special characters not allowed'
    }else{
        specialChar.innerHTML = ''
    }

    //check if length is atleast 4
    const length = hasUnsufficientLength(value)

    //if yes -> display error message saying atleast 4 characters required
    if(length){
        userNameLength.innerHTML='Username requires atleast 4 characters'
    }
    else{
        userNameLength.innerHTML = ''
    }

    //update username validation status
    isUsernameValidated = !space && !special && !length;

})
//username functions
function hasSpace(str){
    for (const char of str) {
        if(char === ' '){
            return true
        }
    }
    return false
}
function hasSpecialCharacter(str){
    for (const char of str) {
        let isLetter = (char>='a' && char<='z') || (char >= 'A' && char <='Z') 
        let isNumber = (char >= '0' && char <= '9')
        if(!isLetter && !isNumber){
            return true;
        }
    }
    return false
}
function hasUnsufficientLength(str){
    if(str.length<4){
        return true
    }
    return false
}


//----------------------------------------------------------------


//email ke declarations

const email = document.querySelector('#email')
const emailAnnotation = document.querySelector('#emailAnnotation')
const emailDot= document.querySelector('#emailDot')
const emailOrder = document.querySelector('#emailOrder')


//email ka event listener 
email.addEventListener('input',(e)=>{
    const value = e.target.value;
    let Annotation = false

    // '@' hai ki nhi check krenge phle
    Annotation = hasAnnotation(value)
    //if no -> display error msg
    if(Annotation){
        emailAnnotation.innerHTML = ""
    } else {
        emailAnnotation.innerHTML = "Email must contain '@'"
    }

    let Dot = false
    // '.' hai ki nhi check krenge
    Dot = hasDot(value)
    //if no -> display error msg
    if(Dot){
        emailDot.innerHTML = ''
    }
    else {
        emailDot.innerHTML = "Email must contain '.'"
    }
    
    let order = false;
    // '@' dot se phle aa rha ki nhi iske liye check
    order = hasCorrectOrder(value)
    if(order){
        emailOrder.innerHTML = ""
    }else {
        emailOrder.innerHTML = "'@' must come before '.' "
    }
})


//email vaildations ke liye functions
function hasAnnotation(str){
    return str.includes('@')
}
function hasDot(str){
    return str.includes('.')
}
function hasCorrectOrder(str){
    if (!hasAnnotation(str) || !hasDot(str)) {
        return true; // order not applicable yet
    }
    return str.indexOf('@') < str.indexOf('.');
}



//-------------------------------------------------------------------


const strengthMessage = document.querySelector('#result')
const formBody = document.querySelector('.form')
const rulesContainer = document.querySelector('#rules');
const pass = document.querySelector('#password')
let key ='';

pass.addEventListener('input', (e)=>{
    rulesContainer.innerHTML = "";
    const password = e.target.value
    key = password;
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


//-----------------------------------------------------------------------


//confirm password -
const confirmPassword= document.querySelector('#confirmPassword')
const confirmMessage = document.querySelector('#confirmMessage')

confirmPassword.addEventListener('input',(e) => {
    const confirmValue = confirmPassword.value;
    const passwordValue = password.value;
    if (confirmValue === '') {
    confirmMessage.innerHTML = '';
    return;
  }
    if (passwordValue === '') {
    confirmMessage.innerHTML = 'Enter password first';
    confirmMessage.style.color = 'red';
    return;
  }
  if (confirmValue === passwordValue) {
    confirmMessage.innerHTML = 'Password confirmed';
    confirmMessage.style.color = 'green';
  } else {
    confirmMessage.innerHTML = 'Passwords do not match';
    confirmMessage.style.color = 'red';
  }
});