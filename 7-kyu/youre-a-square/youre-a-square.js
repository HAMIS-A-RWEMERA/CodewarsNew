var isSquare = function(n){
  if (n < 0) {
    return false;
  }
  let perfectSquare = Math.sqrt(n);
  if (Number.isInteger(perfectSquare)) {
    return true;
  } else {
    return false;
  }
}
​