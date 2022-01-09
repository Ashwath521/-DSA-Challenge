//   Duplicate Elements
// Given an array (arr) of elements, one element in the array occurs twice. Find the element.
// // solution 1
// let arr = [2, 4, 6, 8, 2, 8, 6];

// function findDuplicate(arr) {
//   let set = new Set();
//   let target = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (set.has(arr[i])) {
//       target.push(arr[i]);
//     } else {
//       set.add(arr[i]);
//     }
//   }
//   return target;
// }

// console.log(findDuplicate(arr));

// // solution 2
// let res = new Set(arr);
// console.log(res);
