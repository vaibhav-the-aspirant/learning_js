const user = {
    username: "Vaibhav",
    price: 999,

    welcomeMessage : function(){
        console.log(`${this.username} , Welcome to website`)
        // console.log(this);   // => { username: 'Vaibhav',price: 999,welcomeMessage: [Function: welcomeMessage]}
    }
}

// user.welcomeMessage()
// user.username = "Vidhi"
// user.welcomeMessage() //=> Vidhi , Welcome to website

// console.log(this);

// function chai (){
//     let username = "vaibhav"
//     console.log(this.username);  // => undefined , meaning this is only working in object and not in function
// }
// chai()

// const chai = () => {
//     console.log("chai kb milegi bhaiya...")
// }
// chai()

// const chai = () => {
//     username = "vaibhav"
//     console.log(this.username) // => undefined , if we write - console.log(this) => {}
// }
// chai()

const addOne = ( num1 , num2 ) => {
    return num1 + num2 
}
console.log(addOne(7,4));


const addTwo = (num1,num2) => ( num1 + num2 )   //implicit function
console.log(addTwo(7,3));


const myArr = [ 2,4,5,5,5,4]
// myArr.forEach()
