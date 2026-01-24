const promise1 = new  Promise(function(resolve,reject){
    //do an async task 
    //db calls, cryptography ,network call
    setTimeout(function(){
        console.log('Async task is completed');
        resolve()
    },1000)
    
}
)

promise1.then(function(){
    console.log("promise consumed");
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("async task 2")
        resolve()
    },1000)
}).then(function(){
    console.log("Async 2 resolved ");
    
})

const promise3 = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username : 'chai', email : 'vaibhav@gmail.com'})
    },1000) 
})

promise3.then(function(user){
    console.log(user)
})

const promise4 = new Promise((resolve, reject) => { 
    setTimeout(() => {
        let error = false
        if( !error){
            resolve({username: "vaibhav", password : "vai"})
        }else {
            reject('ERROR: Something went wrong')
        }
    },1000);
})

const username = promise4.then((user)=>{
    console.log(user);
    return user.username
}).then((username)=>{
    console.log(username);
}).catch(function(error){
    console.log(error );
}).finally(()=>{
    console.log("finally, the promise is either resolved or rejected");
})




