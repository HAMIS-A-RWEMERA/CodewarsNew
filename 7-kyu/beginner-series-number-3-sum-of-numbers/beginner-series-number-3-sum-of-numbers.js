function getSum(a, b) {
  let start = Math.min(a, b);
  let end = Math.max(a, b);
  let total = 0;
  for (let i = start; i <= end; i++) {
    total += i;
  }
  return total;
}
​