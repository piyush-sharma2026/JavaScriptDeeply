// for loop

// Printing "Hello World" 5 times using loop
for (let i = 0; i <= 5; i++) {
    console.log("Hello World");
}

// Output:

//Output:-
//        Hello World 
//        Hello World 
//        Hello World 
//        Hello World 
//        Hello World 

// Printing 1 to 10 using loop
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

//Output:-
//        1
//        2
//        3
//        4
//        5
//        6
//        7
//        8
//        9
//        10

// Printing 10 to 1 using loop
for (let i = 10; i >= 1; i--) {
    console.log(i);
}

//Output:- 10
//        9
//        8
//        7
//        6
//        5
//        4
//        3
//        2
//        1
//        0

// Printing table of 2 using loop
for (let i = 2; i <= 20; i = i + 2) {
    console.log(i);
}

//Output:- 
//        2
//        4
//        6
//        8
//        10
//        12
//        14
//        16
//        18
//        20

// Printing odd numbers between 1 to 20 using loop
for (let i = 1; i <= 20; i = i + 2) {
    console.log(i);
}

//Output:- 1
//        3
//        5
//        7
//        9
//        11
//        13
//        15
//        17
//        19

/******************************************************* */

/* for...in loop*/
const person = {
    name: "Piyush",
    age: 22,
    city: "France"
};

for (let key in person) {
    console.log(key + " : " + person[key]);
}

/* for...of loop*/
const colors = ["Pink", "White", "Violet", "Blue"];

for (let color of colors) {
    console.log(color);
}

/* forEach loop*/
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

numbers.forEach(function (arrElement) {
    console.log(arrElement);
});

// Output:
/*
1
2
3
4
5
6
7
8
9
*/

// forEach loop in Arrow function

numbers.forEach((arrElement) => console.log(arrElement));

// Output:
/*
1
2
3
4
5
6
7
8
9
*/

/******************************************************* */

//Nested For loop


for (let i = 0; i <= 10; i++) {
    console.log(`Outer loop:  + ${i}`);
    for (let j = 0; j <= 10; j++) {
        console.log(i + '*' + j + '=' + (i * j)); // multiplication table
    }
}

// Output: table of 0 to 10

/********************************************************* */

// Looping using arrays

let myArray = ["Flash", "Batman", "Superman"];
console.log(myArray.length); //3

for (let i = 0; i < myArray.length; i++) {
    console.log(myArray[i]);
}

// Output:- 
//         flash
//         Batman
//         Superman

// We can also use for...of loop to iterate over array

let myHeroes = ["flash", "Batman", "Superman"];
for (let hero of myArray) {
    console.log(hero);
}
// Output:- flash
//         Batman
//         Superman

/*********************************************************** */

// break and continue
for (let i = 0; i <= 10; i++) {

    if (i === 5) {
        console.log("Breaking the loop at i = 5");
        //break; // it will break the loop when i is 5
        continue; // it will skip the iteration when i is 5 and continue with next iteration
    }


    console.log(`Value of i is: ${i}`);
}