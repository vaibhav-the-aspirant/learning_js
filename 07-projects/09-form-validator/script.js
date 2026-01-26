


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


//-----------------------------------------------------------------

