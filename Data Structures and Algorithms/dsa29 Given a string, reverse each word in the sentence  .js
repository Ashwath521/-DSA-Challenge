// problem
// Given a string, reverse each word in the sentence

let string = "Welcome to this Javascript Guide!";

function rotateEachWord(str) {
  let output = [];
  let res = str.split(/\s/);
  for (let i = 0; i < res.length; i++) {
    output.push(res[i].split("").reverse().join(""));
  }
  return output;
}

console.log(rotateEachWord(string));
