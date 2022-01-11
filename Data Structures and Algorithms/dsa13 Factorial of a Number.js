// Factorial of a Number
// Give an integer (num), find the factorial of that integer.

// If the integer is represented as num, the factorial of num is the product of all positive integers less than or equal to num.

function factorial(n) {
  if (n == 1 || n == 0) return n;
  return n * factorial(n - 1);
}

console.log(factorial(4));
