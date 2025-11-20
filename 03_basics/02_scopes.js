// Scopes in JavaScript

// Scopes are of two types:
// 1. Global Scope
// 2. Local Scope (Function Scope)

let a = 100;
const b = 200;
var c = 300;

console.log(a);
console.log(b);
console.log(c);

// These variables a, b, c are in Global Scope and can be accessed from anywhere in the code.

function testFunction() {
    let a = 40;
    const b = 50;
    var c = 60
};
testFunction();

// console.log(a); // 10
// console.log(b); // 20
// console.log(c); // 30

// The variables a, b, c inside the function are in local scope and cannot be accessed outside the function.


// let x = 100000;

if (true) {
    let x = 100;
    const y = 200;
    var z = 300;
    // console.log(x); //100

}

console.log(x); // x is not defined
console.log(y) // y is not defined
console.log(z); //300

// Here, x and y are block scoped and cannot be accessed outside the if block, but z is function scoped and can be accessed outside the block.

/************************************************************ */

let m = 500000;
if (true) {
    let m = 500;
    const n = 400;
    var o = 700;
    console.log(m); //500
}

console.log(m); //500000
console.log(n); //n is not defined
console.log(o); //700




