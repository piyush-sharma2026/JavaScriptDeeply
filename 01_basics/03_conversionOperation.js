let score = 33;
console.log(typeof score); // number

let age = "33";
console.log(typeof age); // string

// conversion from string to number
let valueInNumber = Number(age);
console.log(typeof valueInNumber); // converted in number
console.log(valueInNumber); // 33


// conversion from string to number when string is not a pure number
let marks = "33abc";
console.log(typeof marks); // String
let valueOfMarks = Number(marks); // converting in number
console.log(typeof marks); // number
console.log(valueOfMarks); //NaN
console.log(marks); // 33abc


let count = null;
console.log(typeof count); // object

let countInNumber = Number(count); // converting null to number
console.log(typeof countInNumber); // number
console.log(countInNumber); //0
console.log(count); // null

// let isLoggedIn = true;
// console.log(typeof isLoggedIn);// boolean

// let loggedinNumber = Number(isLoggedIn); // converting boolean to number
// console.log(typeof loggedInNumber); // number
// console.log(loggedInNumber); // 1

// true converted to 1
// false converted to 0

let result = undefined;
console.log(typeof result); // undefined

let resultInNumber = Number(result); // converting undefined to number
console.log(typeof resultInNumber); // number
console.log(resultInNumber); // NaN

/*

Notes :- "33" =>33 easily converted in number
"33abc" => NaN
true => 1
false => 0

*/


// conversion to boolean
let isLoggedIn = 1;
console.log(typeof isLoggedIn); // number
let booleanIsLoggedIn = Boolean(1); // converting to boolean
console.log(typeof booleanIsLoggedIn); // boolean
console.log(booleanIsLoggedIn);// true

// Note : "Hites" => true


let someNumber = 33;
console.log(typeof someNumber); // number
let stringNumber = String(someNumber); // converting to string
console.log(typeof stringNumber); // string
console.log(stringNumber); //33


// ***************************Operations***************************

// let value = 3;
// let negValue = - value;
// console.log(negValue); // -3

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**2); // 2 to the power 2
// console.log(2%3);


let str1 = "hello";
let str2 = " Piyush";

let str3 = str1 + str2;
console.log(str3); // hello Piyush

// *****************************************

console.log(1 + "2"); // 12
console.log("1" + 2); // 12

console.log("1" + 2 + 2); // 122 
console.log(1 + 2 + "2"); // 32  

console.log(true); // true
console.log(+ true); //1
// console.log(true +); // Error

console.log(+""); // 0

// prefix
let gameCounter = 100;
gameCounter++;
console.log(gameCounter); //101
console.log(++gameCounter); //102


// postfix
let gameCounter2 = 100;
++gameCounter2;
console.log(gameCounter2); //101
console.log(gameCounter2++); //101