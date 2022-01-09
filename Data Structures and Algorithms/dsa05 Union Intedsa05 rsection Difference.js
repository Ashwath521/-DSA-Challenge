// Union Intersection Difference
// Given two arrays (arr1) and (arr2) return the union, intersection, difference and symmetric difference of the two arrays.
let arr1 = [1, 2, 3];
let arr2 = [2, 3, 4];

// union(arr1, arr2) - Returns[(1, 2, 3, 2, 3, 4)];

// function union(arr1, arr2) {
//   return arr1.concat(arr2);
// }

// console.log(union(arr1, arr2));

// // intersection(arr1, arr2) - Returns[(2, 3)];

// function intersection(arr1, arr2) {
//   return arr1.filter((data) => arr2.includes(data));
// }

// console.log(intersection(arr1, arr2));

// difference(arr1, arr2) - Returns[1];
// difference(arr2, arr1) - Returns[4];
// symmetricDifference(arr1, arr2) - Returns[(1, 4)];
function symmetricDifference(arr1, arr2) {
  return arr1
    .filter((data) => !arr2.includes(data))
    .concat(arr2.filter((data) => !arr1.includes(data)));
}

console.log(symmetricDifference(arr1, arr2));
