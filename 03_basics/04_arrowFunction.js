// This keyword and Arrow Function in JavaScript
/*
"this" keyword refers to the current context in which the code is executed.
*/

const user = {
    username: "Dhiraj",
    price: 999,

    welcomeMessage: function () {
        console.log(`${this.username}, Welcome to our website!`);
        console.log(this); // it will print the whole user object
    }
};

user.welcomeMessage(); // Dhiraj, Welcome to our website!
user.username = "Aryan";
user.welcomeMessage(); // Aryan, Welcome to our website!

console.log(this); // in global context, it will print the global object(window in browser and globl in nodejs)
// it will print {} null in global scope in strict mode


/*******************************ARROW FUNCTION************************* */

/********************************* */
// const chai = function () {
//     let usename2 = "Hitesh";
//     console.log(this.username2);
// }
// chai(); // undefined
/*********************************** */

// const chai = () => {
//     let username = "Hitesh";
//     console.log(this.username);
// }

// chai(); // undefined
/************************************ */

/* ARROW FUNCTION */

// Arrow function is a new way to write functions in JavaScript.

// Syntax:
// const functionName = (parameters) => { // function body }



/*
const addTwoNum = (num1, num2) => {
    return num1 + num2;
}
console.log(addTwoNum(5, 10)); // Output will be 15
*/

// IMPLICIT RETURN

const addTwoNum = (num1, num2) => num1 + num2; // no need to write return and can be done in a single line

// Emplicit return
const addTwoNumber = (num1, num2) => num1 + num2; // if there is only one line of code then we can remove the curly braces and return keyword
console.log(addTwo(5, 10));

/*
 You can write this in this format also....(Emplicit return)

const addTwoNumber = (num1, num2)=> (num1 + num2); // if there is only one line of code then we can remove the curly braces and return keyword
console.log(addTwo(5, 10));

*/

const nameofEmployee = (empname) => ("Employee name is " + empname); // if there is only one line of code then we can remove the curly braces and return keyword
console.log(nameofEmployee("Sakshi"));

// EXPLICIT RETURN

const addTwoNums = (num1, num2) => ({ username: "Hitesh" });

//Explicit return

const addTwo = (num1, num2) => {
    return num1 + num2;
}
console.log(addTwo(5, 10));

// Emplicit return
const addTwoNumbers = (num1, num2) => num1 + num2; // if there is only one line of code then we can remove the curly braces and return keyword
console.log(addTwo(5, 10));

/***************************************************************/

