// Problem
/* Write a function called oddball_sum which takes in a list of numbers and returns the sum of all the odd elements. 
Try to solve with and without reduce function. */

// solution 1

let arr = [1, 2, 3, 4, 5];
let temp = 0;
function oddball_sum(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 1) {
      temp += arr[i];
    }
  }
  return temp;
}

console.log(oddball_sum(arr));

// solution 2

function oddball_sum(arr) {
  return arr.reduce((acc, curr) => {
    if (curr % 2 === 1) {
      acc = acc += curr;
    }
    return acc;
  });
}

console.log(oddball_sum(arr));
