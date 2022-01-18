// problem
// Rotate Array to the Left

let arr1 = [1, 2, 3, 4, 5];

function rotateLeft(arr) {
  let res = arr.shift();
  arr.push(res);
  return arr;
}

console.log(rotateLeft(arr1));

// Rotate Array to the Right

let arr2 = [1, 2, 3, 4, 5];

function rotateRight(arr) {
  let last = arr.pop();
  arr.unshift(last);
  return arr;
}

console.log(rotateRight(arr2));
