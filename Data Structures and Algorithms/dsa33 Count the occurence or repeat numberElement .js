let arr = [1, 2, 3, 2, 1, 3, 4, 5, 6, 5, 4];

function getElementCount(arr) {
  let output = {};
  for (let i = 0; i < arr.length; i++) {
    if (output.hasOwnProperty(arr[i])) {
      output[arr[i]] = output[arr[i]] + 1;
    } else {
      output[arr[i]] = 1;
    }
    console.log(output);
  }
}

getElementCount(arr);
