function longestConsec(strarr, k) {
  let n = strarr.length;
  if (n === 0 || k > n || k <= 0) {
    return "";
  }
  let longest = "";
  for (let i = 0; i <= n - k; i++) {
    let currentStr = strarr.slice(i, i + k).join("");
    if (currentStr.length > longest.length) {
      longest = currentStr;
    }
  }
​
  return longest;
}
​