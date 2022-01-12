// Given an input string (str), reverse the string word by word.
// solution 1

function reverseWords(str) {
  return str.split(/\s/).reverse().join(" ");
}

console.log(reverseWords("This is  a  test string"));

// solution 2

function reverseWords(str) {
  let chk = str.split(" ");
  let finalArr = [];
  for (let i = 0; i < chk.length; i++) {
    finalArr.push(chk[i]);
  }
  return finalArr.reverse().join(" ");
}

console.log(reverseWords("This is  a  test string"));
