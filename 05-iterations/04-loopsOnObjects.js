const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb : 'Ruby',
    swift: 'swift by apple',
}

// for (const key in myObject) {
//     console.log(key) // prints all keys
//     console.log(myObject[key]) // prints values
// }

const programming = ["java","cpp","rb","python"]
for (const key in programming) {
    // console.log(programming[key]);
}

const map = new Map()
    map.set('IN' , 'India')
    map.set('SP' , 'Spain')
    map.set('FR' , 'France')

for (const key in map) {
    // console.log(map[key]); //no output; 
}

