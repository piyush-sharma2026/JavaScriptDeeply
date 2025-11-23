function one() {
    const username = "Peter"; // function scope

    function two() {
        const website = "youtube"; // block scope
        console.log(username); // can access variable from parent scope

    }
    //  console.log(website); // Error: website is not defined
    two(); // calling the inner function
}
one(); // calling the outer function



if (true) {
    const age = 30;
    if (age === 30) { // or true
        const name = "John"; // block scope
        console.log(age); // can access variable from parent scope
    }
    //   console.log(name); // Error: name is not defined
}

//console.log(usename); // Error: username is not defined
//console.log(age); // Error: age is not defined
//console.log(name); // Error: name is not defined

/***************************INTERESTING THINGS******************************* */

