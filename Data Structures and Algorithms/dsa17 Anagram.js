// Given two strings (str1 and str2), determine if str1 is anagram of str2.

// Note: An anagram is a word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
// solution1

// function isAnagram(str) {
//   return str.split("").sort().join("");
// }

// function Anagram(str1, str2) {
//   if (str1.length != str2.length) {
//     return false;
//   }
//   return isAnagram(str1) === isAnagram(str2);
//   //   return str1.split("").sort().join("") === str2.split("").sort().join("");
// }
// console.log(Anagram("racecar", "carrace"));

// solution 2

function Anagram(str1, str2) {
  if (str1.length != str2.length) {
    return false;
  }

  return str1.split("").sort().join("") === str2.split("").sort().join("");
}
console.log(Anagram("racecar", "carrace"));
