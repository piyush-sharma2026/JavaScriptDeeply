// OOPS in javaScript

//Object Literals...
const user1 = {
    username: "Hitesh",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function () {
        console.log("Got user details from database");
        console.log(`username is ${this.username}`);
        console.log(this);
    }

}
console.log(user1.username);
console.log(user1.getUserDetails());
console.log(this); //{} output will be empty parenthesis

/***************************************************************/

// CONSTRUCTOR FUNCTION(Helps to avoid override)

function User(username, loginCount, isLoggedIn) {
    this.username = username;
    this.loginCount = loginCount;
    this.loggedIn = isLoggedIn;

    return this;
}
//new 
const userOne = new User("Hitesh", 12, true);
const userTwo = new User("Piyush", 24, false);
console.log(userOne);

