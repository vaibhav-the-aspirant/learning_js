// console.log('1');
// console.log('2');

// setTimeout((()=>{
//     console.log('Callback function fired');
// }),1000)

// console.log('3');
// console.log('4');

const getToDos = (callback) => {
    const request = new XMLHttpRequest();

    request.addEventListener('readystatechange', () => {
        // console.log(request,request.readyState);
        if(request.readyState === 4 && request.status === 200){
            callback(undefined,request.responseText)
        } else if(request.readyState === 4){
            callback("could not fetch the data",undefined)
        }
    }
)

request.open('GET','https://jsonplaceholder.typicode.com/todos/')
request.send()
}


console.log('1')
console.log('2');

getToDos((err,data) => {
    console.log('callback fired')
    if(err){
        console.log(err)
    } else {
        console.log(data);
        
    }
});
console.log('3');
console.log('4');






