function expressionMatter(a, b, c) {
  let option1 = a + b + c;
  let option2 = a * b * c;
  let option3 = (a + b) * c;
  let option4 = a * (b + c);
  let option5 = a + b * c;
  let option6 = a * b + c;
​
  return Math.max(option1, option2, option3, option4, option5, option6);
}
​