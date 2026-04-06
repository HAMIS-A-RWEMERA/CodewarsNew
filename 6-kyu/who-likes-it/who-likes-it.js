function likes(names) {
  let count = names.length;
​
  if (count === 0) {
    return "no one likes this";
  } else if (count === 1) {
    return names[0] + " likes this";
  } else if (count === 2) {
    return names[0] + " and " + names[1] + " like this";
  } else if (count === 3) {
    return names[0] + ", " + names[1] + " and " + names[2] + " like this";
  } else {
    // For 4 or more, we take the total and subtract the 2 we named
    let others = count - 2;
    return names[0] + ", " + names[1] + " and " + others + " others like this";
  }
}
​