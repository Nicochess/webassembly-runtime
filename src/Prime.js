export function isPrime(number) {
  if (number <= 1) {
    return false;
  }

  for (let i = 2; i <= number / 2; i++) {
    if (number % i == 0) {
      return false;
    }
  }
  return true;
}

export function countPrimes(startNum, endNum) {
  let count = 0;
  for (let i = startNum; i <= endNum; i++) {
    if (isPrime(i) == 1) {
      count++;
    }
  }

  return count;
}
