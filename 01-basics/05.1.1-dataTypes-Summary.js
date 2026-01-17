// // primitive 
// // number, bigInt, string, boolean, null, undefined, symbol
//  const num = 12
//  const bigNum = 128523652763n
//  const userName = "vaibhav"
//  const isLoggedIn = true
//  let temp= null
//  let value;
//  let id= Symbol('123')

//  console.log(typeof num)
//  console.log(typeof bigNum)
//  console.log(typeof userName)
//  console.log(typeof isLoggedIn)
//  console.log(typeof temp) //null ka typeof => object.
//  console.log(typeof value)
//  console.log(typeof id)

//  //reference
//  // array, object, functions
//  let heroes =["batman","spider-man","iron-man"]
//  console.log(heroes)
//  console.log(typeof heroes)



//  let obj= {
//     userID : 123,
//     isLogged: true
//  }
//  console.log(obj)
//  console.log(typeof obj)


//  let print = function(){
//     console.log("kya print kru")
//  }
//  print()
//  console.log(typeof print) //also known as function-object
//  // every reference datatype's typeof is considered => object.




 //----------------------------------------------------------------------------------------------------------------



 //Stack (primitve) and Heap (non-primitive)

 let yourName = "vaibhav"
 let anotherName = yourName


 let userOne = {
   email : "geeky@gmail.com",
   upi : "user1@axl"
 }

 let userTwo = userOne

 userTwo.email = "vaib@gmail.com"

 console.log(userOne)

