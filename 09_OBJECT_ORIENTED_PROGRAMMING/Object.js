// Protypes
// Function can work like a function and also it can work like an object
function multiplyBy5(num) {
    return num * 5;
}

multiplyBy5.power = 2;

console.log(multiplyBy5(5));
console.log(multiplyBy5.power);
console.log(multiplyBy5.prototype);

/*********************************** */

function createUser(username, score) {
    this.score = score;
    this.username = username;
}

createUser.prototype.increment = function () {
    this.score++;
}
createUser.prototype.printMe = function () {
    console.log(`Score is ${this.score}`);
}

const chai = new createUser("chai", 25);
const tea = new createUser("Tea", 250);

chai.printMe(); // Score is 25
tea.printMe(); // Score is 250
chai.increment();
chai.printMe(); // Score is 26

