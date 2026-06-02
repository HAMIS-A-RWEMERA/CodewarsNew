function gooseFilter(birds) {
  var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  
  let goodBirds = birds.filter(bird => !geese.includes(bird));
  
  return goodBirds;
}
​