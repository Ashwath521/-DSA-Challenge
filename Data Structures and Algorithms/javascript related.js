//  Write a "mul" function which will properly when invoked as below syntax
//  Add to PDF Junior
// Problem 1
// console.log(mul(2)(3)(4)); // output : 24
// console.log(mul(4)(3)(4)); // output : 48

// Solution
// function mul(a) {
//   return function (b) {
//     return function (c) {
//       return a * b * c;
//     };
//   };
// }

// console.log(mul(2)(3)(4));

// problem 2

//  Explain what a callback function is and provide a simple example

// function callBack(c) {
//   console.log("i am ashwath");
//   c();
// }

// callBack(function () {
//   console.log("I am a callback");
// });

// or

// function modifyArray(arr, callback) {
//   // do something to arr here
//   arr.push(100);
//   // then execute the callback function that was passed
//   callback();
// }

// var arr = [1, 2, 3, 4, 5];

// modifyArray(arr, function () {
//   console.log("array has been modified", arr);
// });

// problem 3

// How to empty an array in JavaScript?

// let arr = [];

// Write a function that would allow you to do this?

// problem 4
// var addSix = createBase(6);
// addSix(10); // returns 16
// addSix(21); // returns 27

// function createBase(a) {
//   return function (Num) {
//     console.log(a + Num);
//   };
// }

// let addSix = createBase(6);
// addSix(10);
// addSix(21);

// problem 5
// How to check if an object is an array or not? Provide some code.

// let arr = [1, 2, 3, 4, 5];

// function checkArray(arr) {
//   if (Array.isArray(arr)) {
//     return "This is a array";
//   } else {
//     return "This is not array";
//   }
// }

// console.log(checkArray(arr));

// problem 6

function isInt(n) {
  if (n % 1 === 0) {
    return true;
  }
  return false;
}

console.log(isInt(4)); // true
console.log(isInt(12.2)); // false
console.log(isInt(0.3)); //false
