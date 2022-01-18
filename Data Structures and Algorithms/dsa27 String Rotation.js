// Problem
// Rotate a String in JavaScript
// Rotating to Left

function rotate(text, noOfChar = 0) {
  const n = noOfChar % text.length;
  return text.slice(n) + text.slice(0, n);
}

console.log(rotate("ABCDE", 1));

// Rotating to Right

function rotateRight(text, noOfChar = 0) {
  const n = noOfChar % text.length;
  return rotate(text, text.length - n);
}

console.log(rotateRight("ABCDE", 1));
