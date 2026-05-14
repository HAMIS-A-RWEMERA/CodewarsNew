function accum(s) {
  let letters = s.split("");
​
  let transformed = letters.map((char, index) => {
    let repeated = char.toLowerCase().repeat(index + 1);
    return repeated.charAt(0).toUpperCase() + repeated.slice(1);
  });
  
  return transformed.join("-");
}
​