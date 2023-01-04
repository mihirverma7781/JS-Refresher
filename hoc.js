/*
1. Function that takes or returns a function is known as HOC.
2. Functional programming uses this type of code
3. maprad function is similar to map
4. also it is a polyfill for map
5. polyfills are noting but alternatives of any functionality
*/

const radius = [1, 3, 2, 4];

function maprad(arr, callback) {
  let newArr = [];
  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    newArr.push(callback(element));
  }
  return newArr;
}

function calculateArea(rad) {
  return Math.round(Math.PI * rad * rad);
}

function calculatecircum(rad) {
  return Math.round(Math.PI * 2 * rad);
}

const res = maprad(radius, calculateArea);
const res2 = maprad(radius, calculatecircum);
console.log(res);
