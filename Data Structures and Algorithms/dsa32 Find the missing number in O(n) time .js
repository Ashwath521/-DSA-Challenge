// Find the missing number in O(n) time

let arr = [1, 2, 3, 4, 5, 6, 7, 9];
let small = 1;
let big = 9;
function findingMissingNumber(arr, small, big) {
  let Total = 0;
  for (let i = 0; i < arr.length; i++) {
    Total += arr[i];
  }
  let upperValue = (big * (big + 1)) / 2;
  let smallValue = (small * (small - 1)) / 2;

  let totalValue = upperValue - smallValue;

  return totalValue - Total;
}

console.log(findingMissingNumber(arr, small, big));
