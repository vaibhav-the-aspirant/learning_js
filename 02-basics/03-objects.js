const symb = Symbol("key1")

const data = {
    Name : "Vaibhav",
    "full name" : "vaibhav singh",
    age : 22,
    branch : "CSE",
    [symb] : "key1",
    location : "Ghaziabad",
    email : "vaibhav@amazon.com",
    isLoggedIn : true,
    lastLoginDays : ["tues","wed","sat"],
}

// console.log(data.location);
// console.log(data["isLoggedIn"]);

// console.log(data["full name"]);
// console.log(data[full name]);
// console.log(data.full name);
// console.log(data."full name");   // no way of accessing full name , by the dot method.

//console.log(data[symb])
//console.log(typeof data[symb])  // not being treated as symbol...object is treating it like a string.
// //to use it symbol we use square brackets with symb inside object.


// data["branch"] = 'ECE'
// Object.freeze(data)
// data.branch = "IT"

// console.log(data)

data.greeting = function(){
    console.log("welcome");
}

console.log(data.greeting()) 
console.log(data.greeting) // => [Function (anonymous)] -- gives function callback..does not runs the function

data.greetUser = function(){
    console.log(`Hello ${this.Name}`)
}
console.log(data.greetUser())