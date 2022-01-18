// Problem
// Write a function that takes an array of integers and returns the sum of the integers after adding 1 to each.
// solution 1
let arr = [1, 2, 3, 4, 5];

function sumOfArray(arr) {
  let output = arr.length;

  for (let i = 0; i < arr.length; i++) {
    output += arr[i];
  }
  return output;
}

console.log(sumOfArray(arr));

// solution 2

function sumOfArray(arr) {
  return arr.reduce((acc, curr) => {
    return (acc = acc += curr);
  }, arr.length);
}

console.log(sumOfArray(arr));
