function sortArray(array) {
  const odds = array.filter(num => num % 2 !== 0).sort((a, b) => a - b);
  
  let oddsPointer = 0;
​
  for (let i = 0; i < array.length; i++) {
  
    if (array[i] % 2 !== 0) {
      array[i] = odds[oddsPointer]; 
  
      oddsPointer++; 
    }
  }
​
  return array;
}
​