// Non Repeating Words
// Given two strings (str1) and (str2), return a list of all non-repeating words.

function nonRepeatingWords(str1, str2) {
  return str1
    .filter((item) => !str2.includes(item))
    .concat(str2.filter((item) => !str1.includes(item)));
}

const str1 = ["Hello", "world"];
const str2 = ["Hello", "Vishwas"];

console.log(nonRepeatingWords(str1,str2));
