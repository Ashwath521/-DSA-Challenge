// Longest Word in a String
// Problem
// Find the longest word in the given string.

// Solution1
function longestWord(arr) {
  let spl = arr.split(" ");
  let len = "";
  for (let i = 0; i < spl.length; i++) {
    if (spl[i].length > len) {
      len = spl[i];
    }
  }
  return len;
}

console.log(longestWord("Ashwath gowda steve job"));

// Solution2
// using reduce method

let arr1 = ["ccc", "steve", "job", "Ashwath"];

let res = arr1.reduce((acc, curr) => (curr.length > acc.length ? curr : acc));

console.log(res);

// solution 3
// using map method
let arr = "my name is Ashwath";

function longestWord(arr) {
  let spl1 = arr.split(" ");
  let chk = spl1.map((item) => item.length);
  return Math.max(...chk);
}
console.log(longestWord(arr));
