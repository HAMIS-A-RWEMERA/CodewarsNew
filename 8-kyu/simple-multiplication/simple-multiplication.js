function simpleMultiplication(number) {
   if(number % 2 === 0){
     return number * 8;
   } else {
     return number * 9;
   }
}
console.log(simpleMultiplication(10)); 
//Or like this using ternary operators
function simpleMultiplication(number) {
  return number % 2 === 0? number * 8 : number * 9
  }