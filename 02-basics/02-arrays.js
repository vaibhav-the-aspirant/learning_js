const dc_heroes = ["flash","superman","batman"]
const marvel_heroes = ["thor","hulk","ironman"]

// marvel_heroes.push(dc_heroes)
// console.log(marvel_heroes);

// const heroes = marvel_heroes.concat(dc_heroes)
// console.log(heroes);


 const allHeroes = [...marvel_heroes,...dc_heroes]
//  console.log(allHeroes);

const anotherArr = [ 1, 2, 3, [4 , 5 , 6], 7, [6 , 7 , [4 , 5]] ] 

const real_another_array = anotherArr.flat(Infinity)
//  console.log(real_another_array);

console.log(Array.isArray("Vaibhav"));
// console.log(Array.from("Vaibhav"));
console.log(Array.from({name:"vaibhav"}));  //interesting case..


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3))





 
