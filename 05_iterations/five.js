// Filter in JavaScript

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
//Output:[4,5,6,7,8,9,10]


// using for each

const numbers = [2, 4, 6, 8, 10];

const myNumbers = [];
numbers.forEach((num) => {
    if (num > 3) {
        myNumbers.push(num);
    }
});
console.log(myNumbers);
//Output:[4,6,8,10]


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2009 },

    { title: 'Book Two', genre: 'Non-Fiction', publish: 1990, edition: 2008 },

    { title: 'Book Three', genre: 'Fiction', publish: 1979, edition: 2004 },

    { title: 'Book Four', genre: 'History', publish: 1965, edition: 2004 },

    { title: 'Book Five', genre: 'Non-Fiction', publish: 1988, edition: 2005 },

    { title: 'Book Six', genre: 'Science', publish: 1980, edition: 2004 },

    { title: 'Book Seven', genre: 'Fiction', publish: 1985, edition: 2000 },

    { title: 'Book Eight', genre: 'History', publish: 1967, edition: 2001 },

    { title: 'Book Nine', genre: 'Science', publish: 1945, edition: 2005 },

    { title: 'Book Ten', genre: 'Science', publish: 1971, edition: 2006 },

];

const userbooks = books.filter((bk) => bk.genre === 'History');
console.log(userbooks);

const userbooks2 = books.filter((bk) => { return bk.publish >= 1940 });
console.log(userbooks2);

