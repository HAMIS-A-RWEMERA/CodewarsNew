function isIsogram(str){
  str = str.toLowerCase(); 
let uniqueSet = new Set(str).size; 
  if(uniqueSet === str.length){
    return true;
  } else {
    return false;
  }
}
console.log(isIsogram("hamis"));