function checkInventory(callback){

    const promise = new Promise((resolve,reject) => {
        setTimeout(()=> {
        console.log('Checking the inventory...');


        resolve()
        // reject(new Error("failed to check inventory!"))
        },2000);
    })
    return promise;

}

function createOrder(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
        console.log('Creating a order...')
        resolve()
        // reject(new Error('failed to create an order'))
        },1000);
    })
    
}

function chargePayment(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
        console.log("Charging the payment...")
        resolve()
        },2000)
    })
    
    
}

function sendingInvoice(){
    return new Promise((resolve,reject)=>{  
        setTimeout(()=>{
        console.log("Sending the invoice...");
        resolve()
        },1000);
        
    })
    
    
}

  
async function main(){

    await checkInventory()
    await createOrder()
    await chargePayment()
    await sendingInvoice()
    // checkInventory()
    // .catch((error)=>{
    //     console.log("err",error)
    // })
    // .then(createOrder)
    // .catch((error)=>{ 
    //     console.log("err",error)
    // }) 
    // .then(chargePayment)
    // .then(sendingInvoice)
    
    

    //callback hell
//   checkInventory(() => {
//     createOrder((error)=>{
//         if(error){
//             console.log("error");
//         }
//         chargePayment((err, chargedAmount)=>{
//             if(err){
//                 console.log("Handling the error");
//                 return;
//             }
//             console.log("charged: ",chargedAmount)
//             sendingInvoice(()=>{
//                 console.log("Everything is completed!")
//             })
//         })
//     });
//   });
//   ;
  console.log('other request procssing...');
}

main();