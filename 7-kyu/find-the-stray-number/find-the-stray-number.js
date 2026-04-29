function stray(numbers) {
  numbers.sort((a, b) => a - b);
 return numbers.at(0) !== numbers.at(1) ? numbers.at(0) : numbers.at (- 1);
}