function calculateCartPrice(...num1){
    return num1
}
// console.log(calculateCartPrice(100,700,200,300,400,400))

function calculateCart(val1,val2,...num1){  
    return num1
}
// console.log(calculateCart(100,700,200,300,400,400)) // => [ 200, 300, 400, 400 ]

const user ={
    userName : "Vaibhav",
    price : 874
}
function handleObject(anyObject){
    // console.log(`username is ${anyObject.userName} price is ${anyObject.price}`)
}
// handleObject(user) // => username is Vaibhav price is 874
handleObject({
    userName : "vidhi",
    price : 8966
})

const myArrays = [200,400,100,200,600]

function returnSecondValue(getArray){
    return getArray[1]
}
// console.log(returnSecondValue(myArrays))
// console.log(returnSecondValue([100,2000,3,0,200]))