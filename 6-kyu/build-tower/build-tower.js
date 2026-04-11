function towerBuilder(nFloors) {
  let tower = [];
  
  for (let i = 1; i <= nFloors; i++) {
    // Number of spaces on each side
    const spaces = " ".repeat(nFloors - i);
    // Number of stars (1, 3, 5, etc.)
    const stars = "*".repeat(2 * i - 1);
    
    tower.push(`${spaces}${stars}${spaces}`);
  }
  
  return tower;
}
​
// Examples
console.log(towerBuilder(3));
/* 
[
  "  *  ", 
  " *** ", 
  "*****"
]
*/
​