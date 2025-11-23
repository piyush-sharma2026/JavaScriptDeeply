// Maps in JavaScript

// Adding 10 to each element in array
const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newNumbers = myNumbers.map((num) => num + 10);
console.log(newNumbers);

//Output:
//[11,12,131,14,15,16,17,18,19,20]


// Adding 10 each element of array using forEach

const newNumb = [];

const newNumbers2 = myNumbers.forEach((num2) => {
    if (num2 > 0) {
        newNumb.push(num2 + 10);
    }
});
console.log(newNumb);


// Chaining

const numnum = myNumbers.map((num) => num * 10).map((num) => num + 1).filter((num) => num > 50);
console.log(numnum);

//Using multiple methods together

/*************************************************************************************************************** */


//REDUCE

const array = [1, 2, 3, 4];

const initialValue = 0;
const sumWithInitial = array.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue;
}, 0);

console.log(sumWithInitial);

const myTotal = array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(myTotal);
