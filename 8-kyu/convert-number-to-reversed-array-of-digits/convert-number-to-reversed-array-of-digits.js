function digitize(n) {
  return String(n)      // 1. Convert number to string "35231"
    .split('')          // 2. Split into array ["3", "5", "2", "3", "1"]
    .reverse()          // 3. Reverse the array ["1", "3", "2", "5", "3"]
    .map(Number);       // 4. Convert each string back to a number [1, 3, 2, 5, 3]
}