function abbrevName(name) {
  // 1. Split the name into two words at the space
  let words = name.split(" ");
  
  // 2. Get the first letter of the first word and capitalize it
  let firstInitial = words[0][0].toUpperCase();
  
  // 3. Get the first letter of the second word and capitalize it
  let secondInitial = words[1][0].toUpperCase();
  
  // 4. Combine them with a dot in the middle
  return firstInitial + "." + secondInitial;
}
​
// Examples:
console.log(abbrevName("Sam Harris"));      // Output: "S.H"
console.log(abbrevName("patrick feeney"));  // Output: "P.F"
​