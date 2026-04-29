function isPalindrome(x) {
  const z = x.toString().toLowerCase();
  return z.split("").reverse().join("") === z ? true : false
}