function tribonacci(signature, n) {
  // 1. If n is 0, return an empty array immediately
  if (n === 0) {
    return [];
  }
​
  // 2. If n is smaller than the signature (1 or 2), 
  // just return that part of the signature
  if (n < 3) {
    return signature.slice(0, n);
  }
​
  // 3. Create a result array starting with the 3 signature numbers
  let result = signature;
​
  // 4. Start a loop from index 3 (the 4th number) up to n
  for (let i = 3; i < n; i++) {
    // Add the three previous numbers together
    let nextNumber = result[i - 1] + result[i - 2] + result[i - 3];
    
    // Push the new sum into our result array
    result.push(nextNumber);
  }
​
  return result;
}
​
// Examples:
console.log(tribonacci([1, 1, 1], 8)); // [1, 1, 1, 3, 5, 9, 17, 31]
console.log(tribonacci([0, 0, 1], 9)); // [0, 0, 1, 1, 2, 4, 7, 13, 24]
​