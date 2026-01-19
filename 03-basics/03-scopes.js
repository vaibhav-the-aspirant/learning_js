let a = 20

if (true){
    let a = 10
    const b = 20
    var c = 30
// console.log(a);
    
}

// console.log(a);
// console.log(b)
// console.log(c);

//-----------------------------------------------------------------------------------------------------------------------------------------

function one(){
    const userName = "vaibhav"
    function two(){
        const website = "utube"
        console.log(userName);
    }
    two()
    // console.log(website)
}
// one()   

// ------------------------------INTERESTING------------------------------------------------------------------------------

console.log(addOne(3))  //allowed - no error
function addOne(num){
    return num+1
}

addtwo(8) // throws error - ReferenceError: Cannot access 'addtwo' before initialization
const addtwo = function (num){
    return num+2
}

