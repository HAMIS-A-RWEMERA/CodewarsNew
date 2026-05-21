function twoSort(array) {
  array.sort();
  
  let firstWord = array[0];
  
  return firstWord.split("").join("***");
}
​