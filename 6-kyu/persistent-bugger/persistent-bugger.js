function persistence(num) {
  let count = 0;
  
  // Keep multiplying digits until num is a single digit (0-9)
  while (num >= 10) {
    num = num
      .toString()
      .split('')
      .reduce((product, digit) => product * Number(digit), 1);
    
    count++;
  }
  
  return count;
}
​
// Examples
console.log(persistence(39));  // Output: 3
console.log(persistence(999)); // Output: 4
console.log(persistence(4));   // Output: 0
​