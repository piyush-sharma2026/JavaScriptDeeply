//Function in JavaScript 

console.log("P");
console.log("I");
console.log("Y");
console.log("U");
console.log("S");
console.log("H");

// How function works..

function SayMyName() {
    console.log("P");
    console.log("I");
    console.log("Y");
    console.log("U");
    console.log("S");
    console.log("H");
}

SayMyName();

/*************************************************** */
//Function with parameters
function addTwoNumbers(number1, number2) {

    console.log(number1 + number2);
}

addTwoNumbers(5, 7); // 12
addTwoNumbers(3, "6");  //36
addTwoNumbers(4, null); // 

//we can put these reference in a variable too..

const result = addTwoNumbers(5, 7);
console.log(result); //undefined

/*************************************************** */

// Function with return keyword

function addTwoNum(number1, number2) {
    let result = number1 + number2;
    return result;
    console.log("Hello"); // unreachable code, it will not execute because after return no code will execute.
}

const result2 = addTwoNum(5, 7);
console.log(result2); //12

/*************************************************** */
// Another way to print function

function loginUserMessage(username) {

    if (username === undefined) {
        console.log("please enter a username");

    }
    return `${username} just loggedin`
}
logiinUserMessage("Piyush"); // No output because it just returned not printed
console.log(loginUserMessage("Piyush"))// it wil print the "Piyush just loggedin"
console.log(loginUserMessage()); // it will print "undefined just loggedin" because no parameter is passed

/*************************************************** */

function loginUserMessage(username = "Akshay") { // setting default parameter

    return `${username} just loggedin`
}

console.log(loginUserMessage()); // it will print "Akshay just loggedin" because default parameter is set
console.log(loginUserMessage("Piyush")); // it wil print the "Piyush just loggedin"


/*************************************************** */