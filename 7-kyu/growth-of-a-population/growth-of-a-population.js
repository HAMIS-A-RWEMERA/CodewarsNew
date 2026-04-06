function nbYear(p0, percent, aug, p) {
  let years = 0;
  while (p0 < p) {
    let growth = p0 * (percent / 100);
    p0 = Math.floor(p0 + growth + aug);
    years = years + 1;
  }
  return years;
}
​