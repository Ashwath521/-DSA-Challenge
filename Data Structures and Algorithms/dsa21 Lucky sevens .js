// Problem;
// Write a function called lucky_sevens which takes an array of integers and returns true if any three consecutive elements sum to 7.

let arr = [2, 1, 5, 1, 0];

function luckySeven(arr) {
  if (arr.length < 3) {
    return "It not possible";
  }
  for (let i = 2; i < arr.length; i++) {
    if (arr[i] + arr[i - 1] + arr[i - 2] === 7) {
      return true;
    }
  }
  return false;
}

console.log(luckySeven(arr));
