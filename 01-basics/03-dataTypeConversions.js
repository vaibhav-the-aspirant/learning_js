let userId = 745;
let userCode= "vaib"
 
let mainID= userId+userCode;

// console.log(mainID)  
// console.log(typeof mainID)


let score = "true"
// console.log(typeof score);  //string

// i want to convert this value into number..

let valueInNumber = Number(score) //explicitly converted into Number
// console.log(typeof valueInNumber);  //number
// console.log( valueInNumber);  //NaN


// when score= "33", Number(score) => value -- 33
// when score= "vaib", Number(score) => value -- NaN
// when score= null, Number(score) => value -- 0
// when score= "undefined", Number(score) => value -- NaN
// when score= true, Number(score) => value -- 1


// let loggedIn = 1

// let userLogged = Boolean(loggedIn)
// console.log(typeof userLogged) // boolean
// console.log(userLogged) // true



// let loggedIn = ""

// let userLogged = Boolean(loggedIn)
// console.log(typeof userLogged) // boolean
// console.log(userLogged)  //false


// let loggedIn = "vaib"

// let userLogged = Boolean(loggedIn)
// console.log(typeof userLogged) // boolean
// console.log(userLogged)  //true

// 0=> false , 1=> true
// "" => false, "vaib" => true

let someNumber = 65
let someNumberInString= String(someNumber)
console.log(someNumber)   //8737; but in string form.
console.log(typeof someNumber)   //string

let someNumber01 = null
let someNumberInString01= String(someNumber)
console.log(someNumber01)   //null => not in string form.
console.log(typeof someNumber01)   // object.






