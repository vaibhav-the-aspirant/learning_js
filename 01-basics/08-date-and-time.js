 // Dates 
let myDate = new Date()
console.log(myDate.toString())

console.log(myDate.toDateString())  //Sat Jan 17 2026

console.log(myDate.toISOString())   //2026-01-17T22:05:14.022Z

console.log(myDate.toJSON())    //2026-01-17T22:05:14.022Z

console.log(myDate.toLocaleDateString())    //1/17/2026

console.log(myDate.toLocaleString())    //1/17/2026, 10:05:14 PM

console.log(myDate.toLocaleTimeString())    //10:06:51 PM

console.log(typeof myDate)  // => object

let myCreatedDate = new Date(2026,0,18)
console.log(myCreatedDate)     // => 2026-01-18T00:00:00.000Z
console.log(myCreatedDate.toLocaleDateString());    // => 1/18/2026   months starts with 0.

let myCreatedDateAndTime = new Date(2026,0,18,3,45)
console.log(myCreatedDateAndTime.toLocaleString());     //=> 1/18/2026, 3:45:00 AM

let myCreatedDate2 = new Date("2026-01-18")     //in this yy-mm-dd format , months starts with 1.
console.log(myCreatedDate2.toLocaleDateString());    // => 1/18/2026

let myTimeStamp = Date.now()
console.log(myTimeStamp)

let myCreatedDate3 = new Date("2026-01-18")     //in this yy-mm-dd format , months starts with 1.
console.log(myCreatedDate3.getTime())
console.log(Math.floor(Date.now()/1000))

let newDate = new Date()
console.log(newDate.getMonth() + 1);

newDate.toLocaleString('default', {
    weekday: "long",
})

