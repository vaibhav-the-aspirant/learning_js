// console.log('1');
// console.log('2');

// setTimeout((()=>{
//     console.log('Callback function fired');
// }),1000)

// console.log('3');
// console.log('4');

const getToDos = (resource,callback) => {
    const request = new XMLHttpRequest();

    request.addEventListener('readystatechange', () => {
        // console.log(request,request.readyState);
        if(request.readyState === 4 && request.status === 200){
            const data = JSON.parse(request.responseText)
            callback(undefined, data)
        } else if(request.readyState === 4){
            callback("could not fetch the data",undefined)
        }
    })
    request.open('GET',resource)
    request.send()
}
 

console.log('1')
console.log('2');

getToDos('shruti.json',(err,data) => {
    console.log(data)
    getToDos('aditya.json',(err,data) => {
        console.log(data)
        getToDos('vaibhav.json',(err,data)=>{
            console.log(data)
        })
    })
}); 
console.log('3');
console.log('4');






