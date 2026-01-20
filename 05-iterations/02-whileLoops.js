//while
let i = 1
while (i <= 10) {
    // console.log(`Value of index is : ${i}`)
    i += 2
}

const myArray = ["batman", "flash", "superman"]
let index = 0
while( index < myArray.length ){
    // console.log( myArray[index] )
    index++
}
index-- //value of index was out of bounds.
do {
    // console.log(myArray[index])
    index--
} while (index >= 0);


let num =11
do {
    console.log("Value of score : " + num)
    num--
} while (num<10); //even if inital condition is wrong, still loops one time.
