/*You will be given an array of several arrays that each contain integers and 
your goal is to write a function that will sum up all the numbers in all the arrays. 
For example, if the input is [[3, 2], [1], [4, 12]] then your program should output
22 because 3 + 2 + 1 + 4 + 12 = 22.*/

let arr = [[3, 2], [1], [4, 12]];

// solution 1 using flat & foreach Method
let result1 = arr.flat(3);
let finalArr1 = 0;
let output1 = result1.forEach((item) => (finalArr1 += item));
console.log("SOLUTION 1 RESULT ", finalArr1);

// solution 2 using reduce Method
let finalArr2 = 0;
let result2 = arr.reduce(function (acc, curr) {
  if (Array.isArray(curr)) {
    acc = acc.concat(curr);
  }
  return acc;
}, []);

let output2 = result2.forEach((item) => (finalArr2 += item));
console.log("SOLUTION 2 RESULT ", finalArr2);

// solution 3

function sumArray(arr) {
  return arr
    .reduce((acc, curr) => acc.concat(curr))
    .reduce((acc, curr) => acc + curr);
}

console.log("SOLUTION 3 RESULT ", sumArray(arr));
