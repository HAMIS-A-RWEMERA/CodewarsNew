function getGrade(s1, s2, s3) {
  // 1. Calculate the average inside the function
  let score = (s1 + s2 + s3) / 3;
​
  // 2. Check the score against the grade steps
  if (score >= 90) {
    return 'A';
  } else if (score >= 80) {
    return 'B';
  } else if (score >= 70) {
    return 'C';
  } else if (score >= 60) {
    return 'D';
  } else {
    return 'F';
  }
}
​