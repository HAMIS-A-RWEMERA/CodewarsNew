function removeSmallest(numbers) {
  // Find the index of the first occurrence of the minimum value
  const minIndex = numbers.indexOf(Math.min(...numbers));
  
  // Return a new array excluding that specific index
  return numbers.filter((_, index) => index !== minIndex);
}
​
// Examples
console.log(removeSmallest([1, 2, 3, 4, 5])); // Output: [2, 3, 4, 5]
console.log(removeSmallest([5, 3, 2, 1, 4])); // Output: [5, 3, 2, 4]
console.log(removeSmallest([2, 2, 1, 2, 1])); // Output: [2, 2, 2, 1]
console.log(removeSmallest([]));              // Output: []
​