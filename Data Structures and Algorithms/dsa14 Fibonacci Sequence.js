// Give a number n, find the first n elements of the fibonacci series.

// Now what is fibonacci series? Well it is a series of numbers in which each number ( Fibonacci number ) is the sum of the two preceding numbers.

// The first two numbers in the series are 0 and 1.

function fibonacci(n) {
  if (n == 1 || n == 0) return n;

  return fibonacci(n - 1) + fibonacci(n - 2);
}

function printFibonacci(n) {
  for (let i = 0; i < n; i++) {
    console.log(fibonacci(i));
  }
}
printFibonacci(7);
