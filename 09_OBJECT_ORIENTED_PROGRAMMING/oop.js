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
    this.isloggedIn = isLoggedIn;

    return this;
    // write return or not its not an issue
}
//new (constructor gives us a new instance)
const userOne = new User("Hitesh", 12, true);
const userTwo = new User("Piyush", 24, false);
console.log(userOne);
//if we will not write new keyword it will override
// In place of userOne userTwo will be printed


/***************************************************************** */

