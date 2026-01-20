// for each loop

const coding = ['js','ruby','java','python','cpp']

// coding.forEach( function (item) {
//      console.log(item);
     
// } )

// coding.forEach( (item) => {
//     console.log(item)
// } )

// function printMe(item){
//     console.log(item);
// }

// coding.forEach( printMe )

// coding.forEach( (item,index,arr) => {
//     console.log(item,index,arr);
// })

//[{} , {} , {}]
const myCoding = [
    {
        langName: "javaScript",
        langFileName: "js"
    },
    {
        langName: "python",
        langFileName: "py"
    },
    {
        langName: "java",
        langFileName: "java"
    }
]

myCoding.forEach( (item) => {
    console.log(item.langFileName,item.langName)
} )