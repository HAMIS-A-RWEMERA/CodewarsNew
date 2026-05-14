function isPangram(string) {
  
  let lowerString = string.toLowerCase();
  
  let lettersOnly = "";
  
  for (let i = 0; i < lowerString.length; i++) {
    let char = lowerString[i];
    
    if (char >= 'a' && char <= 'z') {
      lettersOnly += char;
    }
  }
  
  let uniqueLetters = new Set(lettersOnly);
​
  return uniqueLetters.size === 26? true : false;
}
​