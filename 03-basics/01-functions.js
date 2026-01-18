

function sayMyName(){
    console.log("V");
    console.log("A");
    console.log("I");
    console.log("B");
    console.log("H");
    console.log("A");
    console.log("V");
}

// sayMyName()

// const name = sayMyName
// console.log(name); // => [Function: sayMyName]


 function addTwoNumbers(num1,num2){
    console.log(num1 + num2);
 }
//  addTwoNumbers(7,6)


//  function addTwoNumbers(num1,num2){
//     console.log(num1 + num2);
//  }
//  const result = addTwoNumbers(3,6)
//  console.log("Result : ", result); //=> Result :  undefined

// function addTwoNumbers(num1,num2){
// // let result = num1 + num2;
// //return result
// return num1 + num2
// console.log(num1 + num2);
// }
// const result = addTwoNumbers(3,6)
// console.log("Result : ", result); //=> Result :  9


// function userLoginMessage(userName){
//     if(userName ===  undefined){
//         console.log("Please enter a Username");
//         return
//     }
//     return `${userName}, just logged in.`
// }


function userLoginMessage(userName){
    if(!userName){  // abhi ke case m username == undefined h, aur undefined ki value falsy hoti h, 
    // isliye humne ! use kiya. Jiska mtlb ye value tbhi true hoga jb username false hoga,mtlb jb username undefined hoga.
        console.log("Please enter a Username");
        return
    }
    return `${userName}, just logged in.`
}


// function userLoginMessage(userName = "Ravi"){ //set Ravi as the default value..now control never enters if block, because username never gets undefined.
//     // if no value is passed, js uses Ravi(default value) as default value.
//     if(!userName){  // abhi ke case m username == undefined h, aur undefined ki value falsy hoti h, 
//     // isliye humne ! use kiya. Jiska mtlb ye value tbhi true hoga jb username false hoga,mtlb jb username undefined hoga.
//         console.log("Please enter a Username");
//         return
//     }
//     return `${userName}, just logged in.`
// }


console.log(userLoginMessage()); //=> undefined, just logged in.
// console.log(userLoginMessage("")); //=> , just logged in.
// console.log(userLoginMessage(null)); //=> null, just logged in.
console.log(userLoginMessage("vaibhav")); // =>vaibhav, just logged in.



 
