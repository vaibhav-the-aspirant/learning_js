//AVOID THESE TYPES OF CONVERSIONS AT ALL COST !!!

console.log("2" > 1)    //true
console.log("02" > 1)   //true
console.log(false > 0)  
// should always avoid comparing two different data types

console.log(null > 0) //false
console.log(null == 0) //false
console.log(null >= 0) //true 

//the reason is that equality check ==  and comparisons > < >= , works differently.
//comparisons convert null into a number,treating it as 0.
//thats y, null(0) > 0 gives false and null(0) >= gives true, whereas equality check doesn't convert null to zero,
//therefore, null==0 gives false


console.log("2" == 2) //true    
console.log("2" === 2)  //false, strictly checking, checks value as well as data type

//ALWAYS COMPARE SAME DATA TYPES. DON'T WASTE TIME IN LEARNING THESE AND FOCUS ON OTHER IMP THINGS.





