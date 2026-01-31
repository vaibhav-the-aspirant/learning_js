//object literal
const user = {
    username: 'vaibhav',
    loginCount : 9,
    signedIn : true,
    getUserDetails: function(){
        // console.log("Got user details from db");
        // console.log(`username: ${this.username}`);
        
    }
}


// console.log(user.username);
// user.getUserDetails();


//constructor
// const promiseOne = new Promise()
// const date = new Date()

function User(userName,loginCount,isLoggedIn){
    this.userName = userName
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        // console.log(`welcome ${this.userName}`);
        
    }
    return this
}
 

const userOne = new User("vaibhav",12,true)
const userTwo = new User('chaiaurcode',8,false)
// console.log(userOne)
// console.log(userTwo)

console.log(userOne.constructor);
 