function oddOrEven(array) {
  let total = 0;
  for (let number of array) {
    total = total + number;
  } return total % 2 === 0 ? "even" : "odd" }