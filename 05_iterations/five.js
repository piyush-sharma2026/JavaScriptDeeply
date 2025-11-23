// Filter map and reduce in JavaScript

const coding = ["js", "ruby", "java", "python", "cpp"];

const values = coding.forEach((item) => {
    console.log(item);
})

console.log(values); //undefined

/*OUTPUT:
js
ruby
java
python
cpp

undefined
*/

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newNums = myNums.filter((num) => num > 5);
console.log(newNums);
//Output:
/*

[6,7,8,9,10]

*/

const newNummm = myNums.filter((num) => {
    return num > 3;
});
console.log(newNummm);


// using for each

const numbers = [2, 4, 6, 8, 10];

const myNumbers = [];
numbers.forEach((num) => {
    if (num > 3) {
        myNumbers.push(num);
    }
})
console.log(myNumbers);
