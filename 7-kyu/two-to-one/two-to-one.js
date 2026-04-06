function longest(s1, s2) {
  let combined = s1 + s2;
  let uniqueSet = new Set(combined);
  let array = Array.from(uniqueSet);
  let sorted = array.sort();
  return sorted.join("");
}
​