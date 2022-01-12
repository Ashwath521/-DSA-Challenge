// Remove Vowels from a String
// Given an input string (str), remove all vowels from the string.
// solution 1
// function removeVowels(str) {
//   let newString = "";
//   for (let i = 0; i < str.length; i++) {
//     if (
//       str[i] != "a" &&
//       str[i] != "e" &&
//       str[i] != "i" &&
//       str[i] != "o" &&
//       str[i] != "u"
//     ) {
//       newString += str[i];
//     }
//   }
//   return newString;
// }

// console.log(removeVowels("Hello World"));

// solution 2

let str = "Hello World";
let chk = str.split("");
let store = [];

let res = chk.filter((chk) => {
  if (chk != "a" && chk != "e" && chk != "i" && chk != "o" && chk != "u") {
    store.push(chk);
  }
});

console.log(store.join(""));
