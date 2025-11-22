/* IIFE : Immediately Invoked Function Expressions */

(function chai() {
    console.log("DB connected");
})(); // output will be DB connected

// If ; will not put in code it not understand where to stop and next code will be not execute.
// Global scope ke pollution ko hatane ke liye IIFE used kiya jata hai



// IIFE in Arrow Function...

(() => {
    console.log(`DB Connected`);
})(); // output will be DB Connected


((name) => {
    console.log(`DB connected to ${name}`)
})('Piyush'); // output will be DB connected to Piyush