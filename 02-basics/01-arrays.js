const myArrays = [0, 1, 2, 3, 4, 5, true, "vaibhav"]
// console.log(myArrays[3])
// console.log(myArrays[6])

//Arrays methods

// myArrays.push(false)
// myArrays.push(7)
// myArrays.pop()

// myArrays.unshift(true)
// myArrays.shift()

// console.log(myArrays.includes(true))
// console.log(myArrays.indexOf(true))

// const newArr = myArrays.join()

// console.log(myArrays)
// console.log(typeof myArrays)

// console.log(newArr)
// console.log(typeof newArr)

// slice , splice

console.log("A ", myArrays)
const myNewArr = myArrays.slice(4,7)
console.log(myNewArr)
console.log("B ", myArrays)

const myNewAr1 = myArrays.splice(4,7)
console.log(myNewAr1)
console.log("B ", myArrays)




