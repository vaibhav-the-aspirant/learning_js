// Immediately invoked function expressions (IIFE)

(chai = () => {
    //named iife
    console.log("DB CONNECTED");
})(); // here the ending semicolon is important cuz the iife does not know where to stop the execution of function.

( (name) => {
    //unnamed iife 
    console.log(`DB CONNECTED to ${name}`);
})("Vaibhav");