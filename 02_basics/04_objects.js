//const tinderUser = new Object();
const tinderUser = {};

tinderUser.id = "123abc";
tinderUser.name = "Piyush";
tinderUser.isLoggedIn = false;
console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "piyush",
            lastname: "Sharma"
        }
    }
}

console.log(regularUser.fullname);
console.log(regularUser.fullname.userfullname.firstname);


const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };

console.log(obj1);
console.log(obj2);

//const obj3 = { obj1, obj2 }
//const obj3 = Object.assign(obj1, obj2);
console.log(obj3);

const obj3 = { ...obj1, ...obj2 };
console.log(obj3);

const users = [
    {
        id: 1,
        email: "p@gmail.com"
    },
    {
        id: 1,
        email: "k@gmail.com"
    },
    {
        id: 2,
        email: "l@gmail.com"

    },

]

users[1].email;
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('LoggedIn')); //false
console.log(tinderUser.hasOwnProperty('isLoggedIn')); //true





