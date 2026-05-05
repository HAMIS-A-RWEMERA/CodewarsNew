function twoSum(numbers, target) {
  for (let i = 0; i < numbers.length; i++) {
    let currentNum = numbers[i];
    let answerNeeded = target - currentNum;
    let remainingNumbers = numbers.slice(i + 1); 
    if (remainingNumbers.includes(answerNeeded)) {
      let secondIndex = numbers.indexOf(answerNeeded, i+1);
      return [i, secondIndex];
    }
  }
  return "No number that adds up to the target";
}
​