// for

for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 7){
        console.log("Thala for a reason");
        
    }
    // console.log(element)
}

for (let i = 1; i < 5; i++) {
    // console.log(`Outer loop : ${i}`)
    for (let j = 0; j <= 10; j++) {
        // console.log(`Inner loop value :  ${j}, and Outer loop value : ${i}`)
        // console.log(`${i} * ${j} = ${i*j}`)
    }
}

 const myArray = ["flash", "batman", "Vaibhav"]
for (let index = 0; index < myArray.length; index++) {
    const element =myArray[index];
    // console.log(element)
}

// break continue

for (let i = 1; i < 11; i++) {
    if(i==5){
        console.log("5 is not feeling good")
        continue
    }
    console.log(`Value of i is ${i}`);
}