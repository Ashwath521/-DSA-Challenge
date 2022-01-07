// You are given an array of two numbers [a,b],
// Find the sum of those two numbers plus the sum of all the numbers between them.

// solution 1

function sum(arr) {
  const max = Math.max(arr[0], arr[1]);
  const min = Math.min(arr[0], arr[1]);
  let count = 0;
  for (let i = min; i <= max; i++) {
    count += i;
  }
  return count;
}

console.log(sum([1, 4]));
console.log(sum([4, 1]));
