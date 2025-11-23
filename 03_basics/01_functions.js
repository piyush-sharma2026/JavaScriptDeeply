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
loginUserMessage("Piyush"); // No output because it just returned not printed
console.log(loginUserMessage("Piyush"))// it wil print the "Piyush just loggedin"
console.log(loginUserMessage()); // it will print "undefined just loggedin" because no parameter is passed

/*************************************************** */

function loginUserMessage(username = "Akshay") { // setting default parameter

    return `${username} just loggedin`
}

console.log(loginUserMessage()); // it will print "Akshay just loggedin" because default parameter is set
console.log(loginUserMessage("Piyush")); // it wil print the "Piyush just loggedin"


/*************************************************** */

//FUNCTION WITH OBJECT AND ARRAY IN JAVASCRIPT

// FUNCTION IN OBJECTS


function calculateCartPrice(...num1) { //rest operator or spead operator
    return num1;
}

console.log(calculateCartPrice(100, 200, 300, 400, 500)); // it will return array of all the numbers passed as arguments
//NOTE:-- rest operator is used to pass multiple arguments as an array to a function


//Another way to write function using rest operator

function calculateCartPrice2(val1, val2, ...prices) { //rest operator or spead operator
    return prices;
}
console.log(calculateCartPrice2(100, 200, 300, 400, 500)); // it will return array of all the numbers passed as arguments except first two values

// 100 and 200 are assigned to val1 and val2 respectively and rest of the values are assigned to prices array

/*************************************************** */



const user2 = {
    username: "Piyush",
    price: 999,
    courseInstructor: "Piyush Sharma"
};

function handleObject(anyobject) {
    return `Hello ${anyobject.username} you price is ${anyobject.price} and your courseInstructor is ${anyobject.courseInstructor}`
};

console.log(handleObject(user2)); // it will print the object properties in the string format
//Output: Hello Piyush you price is 999 and your courseInstructor is Piyush Sharma

// We can also pass object directly to the function without storing it in a variable
handleObject({
    username: "Akshay",
    pricce: 700,
    courseInstructor: "Akshay Kumar"
});

console.log(handleObject(user2));

/*************************************************** */

// FUNCTION IN ARRAY

const myArray = [200, 400, 600, 100];
function returnSecondValue(getArray) {
    return getArray[0];
}

console.log(returnSecondValue(myArray)); // it will return 200
console.log(returnSecondValue([200, 400, 600, 100])); // it will also return 200

/*************************************************** */

addOne(6); // it will return 7
console.log(addOne(6)); // it will print 7
function addOne(num) {
    return num + 1;
}
// addOne(6); // it will return 7
// console.log(addOne(6)); // it will print 7


addTwo(5) // it will through error because function is store in a variable and variable hoisting is not possible
console.log(addTwo(5)) // it will through error because function is store in a variable and variable hoisting is not possible
const addTwo = function (num) {
    return num + 2;
}

