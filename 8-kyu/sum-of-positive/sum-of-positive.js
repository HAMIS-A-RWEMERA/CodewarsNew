function positiveSum(arr) {
 return arr.filter(n=> n>0).reduce((sum, n) =>sum + n, 0)
}