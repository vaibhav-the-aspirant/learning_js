// const tinderUser = new Object()
const tinderUser = {}
tinderUser.id = "123abc"
tinderUser.name = "shami"
tinderUser.isLoggedIn = true

// console.log(tinderUser)

const regUser = {
    email : "sam@gmail.com",
    fullname : {
        userFullName : {
            firstName : "vaibhav",
            lastName : "singh"
        }
    }
}

// console.log(regUser.fullname.userFullName.firstName);

const obj1 = { 1: "A", 2: "B" }
const obj2 = { 3: "C", 4: "D"}

// const obj3 = Object.assign({},obj1,obj2)

const obj3 = {...obj1,...obj2}
console.log(obj3)

const users = [
    {
        id: 1,
        email: "v@gmail.com"
    },
    {
        id: 1,
        email: "v@gmail.com"
    },
    {
        id: 1,
        email: "v@gmail.com"
    },
]
users[1].email
console.log(tinderUser)

console.log(Object.keys(tinderUser)) // => returns in arrays
console.log(Object.values(tinderUser)) // => returns in arrays
console.log(Object.entries(tinderUser)) // => returns in arrays
console.log(tinderUser.hasOwnProperty('isLoggedIn'))