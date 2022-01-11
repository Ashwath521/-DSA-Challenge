//  Prime Numbers
// Given two numbers min and max, find all the prime numbers in the range of min to max. (min and max included)
function isPrime(n) {
  let flag = true;
  for (let i = 2; i <= n / 2; i++) {
    if (n % i === 0) {
      flag = false;
      break;
    }
  }
  if (flag) {
    console.log(n);
  }
}

function printPrime(min, max) {
  for (let i = min; i < max; i++) {
    if (i === 1 || i === 0) {
      continue;
    }
    isPrime(i);
  }
}

printPrime(0, 20);
