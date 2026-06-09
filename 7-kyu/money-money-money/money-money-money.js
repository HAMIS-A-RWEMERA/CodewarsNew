function calculateYears(principal, interest, tax, desired) {
 
  let years = 0;
  
  while (principal < desired) {
    
    let interestEarned = principal * interest;
    
    let taxOwed = interestEarned * tax;
    
    principal = principal + (interestEarned - taxOwed);
  
    years++;
  }
  return years;
}
​