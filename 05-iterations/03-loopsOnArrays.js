// for of 

// [{}, {}, {}]

const myArray = [1,2,3,4,5]

for (const num of myArray) {
    // console.log(num);
}

const word = "mere mehboob"
for (const letter of word) {
    // console.log(letter)
}

//Maps

const map = new Map()
map.set('IN' , 'India')
map.set('US', "Unitd States Of America")
map.set('FR',"France")
map.set('IN' , 'India')  //map only has unique values

// console.log(map)

for (const key of map) {
    //  console.log(key)   //=> [ 'IN', 'India' ] [ 'US', 'Unitd States Of America' ] [ 'FR', 'France' ]
}

for (const [key] of map) {
    //  console.log(key)   // => IN US FR ; [] square brackets used to represent keys.
}

for (const [k,v] of map) {
    //  console.log(k, v)  //=> IN India   US Unitd States Of America  FR France
}

const myObject = {
    'game1' : 'NFS',
    'game2' : 'GTA'
}
for (const [key,value] of myObject) {
    console.log(key, ' : ', value)  // => error : myObject is not iterable
}