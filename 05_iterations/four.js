// for of 

const arr = [1, 2, 3, 4, 5];
for (const num of arr) {
    console.log(num);
}

// Output: It will print the all elements of arr

const greetings = "Hello World";
for (const greet of greetings) {
    console.log(`Each char is ${greet}`);
}

// Maps

const map = new Map();
map.set('IN', "India");
map.set('UN', "United State of America");
map.set('Fr', "France");

console.log(map); // It will print the unique value
//Output:
//  'IN' => 'India',
//   'USa' => 'United State of America',
//   'Fr' => 'France'

for (const key of map) {
    console.log(key);
}

// Output:
// IN  :- India
// USa  :- United State of America
// Fr  :- France

for (const [key, value] of map) {
    console.log(key, ":-", value);
}



// for in loop.....!
//OBJECT
const myObj = {
    js: "JavaScript",
    cpp: "c++",
    rb: "ruby",
    swift: " swift by apple",
}

for (const key in myObj) {
    console.log(key + ":" + myObj[key]);
}

// for in loop.....!
//ARRAYS
const programming = ["js", "rb", "py", "java", "cpp"];

for (const key in programming) {
    console.log(key); // Output will be index
    console.log(programming[key]); // output will be elements of array

}