function findMultiples(integer, limit) {
  
  let result = [];
  
  let totalNumbers = Math.floor(limit / integer);
  
  for (let count = 1; count <= totalNumbers; count++) {
    
    result.push(count * integer);
  }
  
  return result;
}
​