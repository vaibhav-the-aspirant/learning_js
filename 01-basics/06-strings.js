const userName = "Vaibhav"
// console.log(userName)

const repoCount = 3
console.log(`Hello my name is ${userName} and my repo count is ${repoCount}`)

const userName2 = "Vaibhav"
console.log(userName2[0])
console.log(userName2.__proto__)
console.log(userName2.length)
console.log(userName2.toUpperCase())
console.log(userName2.charAt(3))
console.log(userName2.indexOf('V'))

const subName = userName2.substring(0,5)
console.log(subName)

const anotherName = userName.slice(-7,-4) // => slice(0,3)
console.log(anotherName)

const stringOne = "   are bahuut jaagah h  "
console.log(stringOne.trim())

const url = "https://vaibhavSingh.com/vaibhav%20Singh"
console.log(url.replace('%20' , '-'))
