function removeExclamationMarks(s) {
  // Use a global regular expression to catch all '!' occurrences
  return s.replace(/!/g, '');
}
​
// Examples
console.log(removeExclamationMarks("Hello World!"));    // Output: "Hello World"
console.log(removeExclamationMarks("Hi! Hello! Hi!")); // Output: "Hi Hello Hi"
​