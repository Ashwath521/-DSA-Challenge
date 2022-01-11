// Meandering Array

let arr = [-5, 3, 6, -1, 4];

function meanderingArr(arr) {
  let finalArr = [];
  let sortedArr = arr.sort((a, b) => a - b);

  let flag = true;
  let small = 0;
  let big = arr.length - 1;

  for (let i = 0; i < arr.length; i++) {
    if (flag) {
      finalArr[i] = sortedArr[big--];
    } else {
      finalArr[i] = sortedArr[small++];
    }
    flag = !flag;
  }
  return finalArr;
}

console.log(meanderingArr(arr));
