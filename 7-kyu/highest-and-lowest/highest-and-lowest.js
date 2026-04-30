function highAndLow(numbers) {
  let numArray = numbers.split(" ");
  let highest = Number(numArray[0]);
  let lowest = Number(numArray[0]);
  for (let i = 1; i < numArray.length; i++) {
    let current = Number(numArray[i]);
​
    if (current > highest) {
      highest = current;
    }
    
    if (current < lowest) {
      lowest = current;
    }
  }
  return highest + " " + lowest;
}
​