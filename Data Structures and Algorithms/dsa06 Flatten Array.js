// Flatten Array
// Given a nested array (arr), return the flattened array.

// solution1
// let arr = [1, [2], [3, [[4]]]];

// let res = arr.flat(4);
// console.log(res);

// solution 2
function flattenArray(arr) {
  return arr.reduce((acc, curr) => {
    if (Array.isArray(curr)) {
      acc = acc.concat(flattenArray(curr));
    } else {
      acc = acc.concat(curr);
    }
    return acc;
  }, []);
}

let arr = [1, [2], [3, [[4]]]];

console.log(flattenArray(arr));
