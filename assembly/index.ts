// The entry file of your WebAssembly module.

export function add(a: i32, b: i32): i32 {
  return a + b;
}

export function subtract(a: i32, b: i32): i32 {
  return a - b;
}

export function multiply(a: i32, b: i32): i32 {
  return a * b;
}

export function divide(a: i32, b: i32): i32 {
  return a / b;
}

export function isPrime(number: i32): bool{
  if ( number <= 1)  {
    return false;
  }

  for (let i = 2; i <= number / 2; i++){
     if (number % i == 0) { 
      return false; 
    }
  }
  return true;
}

export function countPrimes(startNum: i32, endNum: i32): i32 {
  let count = 0;
  for (let i = startNum; i<=endNum; i++) {
     if(isPrime(i) == 1 ) {
       count++; 
      }
  }
  
  return count;
}