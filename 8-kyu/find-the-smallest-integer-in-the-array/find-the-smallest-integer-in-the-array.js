function findSmallestInt(arr) {
const sortedArray = arr.sort((a, b) => a-b)
  return sortedArray[0];
  }