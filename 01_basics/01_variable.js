const accountId = 144567;
let accountName = "Piyush";
var accountPassword = "12345";

accountCity = "Jaipur";

// accountId = 2; 

// This will give error
//because accountId is a constant and cannot be reassigned
console.log(accountId);

accountName = "Vipul";
console.log(accountName); // this can be changed

accountPassword = "54321";
console.log(accountPassword); // this can also be changed

accountCity = "Delhi";
console.log(accountCity); // this can also be changed

console.table([accountId, accountName, accountPassword, accountCity]);
// this will print all the variables in a tabular format




// Notes: 
// 1. const is used to declare variables that cannot be reassigned
// 2. let is used to declare variables that can be reassigned
// 3. var is also used to declare variables that can be reassigned but it has function scope
// 4. If a variable is declared without var, let or const, it becomes a global variable

/*
Prefer not to use var because of issue in block scope and functional scope.
*/






