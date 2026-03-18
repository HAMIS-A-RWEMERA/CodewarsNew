function betterThanAverage(classPoints, yourPoints) {
  let totalSum = yourPoints;
  for (let i = 0; i < classPoints.length; i++) {
    totalSum = totalSum + classPoints[i];
  }
  let average = totalSum / (classPoints.length + 1);
  if (yourPoints > average) {
    return true;
  } else {
    return false; 
}
  }
​