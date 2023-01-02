//function statement
function a() {
  console.log("a called");
}
a();

// function expression

/*
1. you can assign a function to a variable
2. initially the variable is assigned as undefined whereas 
3. function declaration is stored as a whole in memory creation phase ie 
4. fucntion declarations can be called before declaration

*/

var b = function () {
  console.log("b called");
};

// anonymous function
/*
1. function statement should have a name.
2. anonymous functions are used in place where functions are used as values
3. the above one is also a anonymous function as we are using function as value and assigning it to a variable
*/

// function () {
//  console.log("error syntax")
// }

// named function expression

/*
if we call below function with function name xyz it will throw error coz the function is not created
in global scope so we cant access it globally instead we can call it with the variable name
*/

var test = function xyz() {
  console.log("named function expression");
};

// first class functions

/*
 1. we can pass function inside function as arguments (as a normal values)
 2. we can return a function from a function
 3. all functions are first class functions
 4. first class function = first class citizens
 */

function testnew(func) {
  return func;
}

const res = testnew(function () {
  console.log("test");
});
res();
