// Palindrome
// Given a string (str), determine if it is a palindrome.

// Note: A plaindrome is a word, phrase, or sequence that reads the same backwards as forwards, e.g. madam.

function isPalindrome(str) {
  return str === str.split("").reverse().join("");
}

console.log(isPalindrome("madam"));
