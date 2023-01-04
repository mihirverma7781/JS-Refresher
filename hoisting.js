/*
1. In hoisting all the variable declarations goes on the top of their scope.
2. Scope is noting but the containing area where the entity resides.
3. let and const are block scoped and var is functional scoped
4. let and const are hoisted but in seperate memory space (known as script area) 
*/

function varhoisting(params) {
    console.log(a)
    setTimeout(() => {
        console.log("inside settimeout")
    }, 1000);
    var test = 10;
}
console.log(num);
let num  = 10;