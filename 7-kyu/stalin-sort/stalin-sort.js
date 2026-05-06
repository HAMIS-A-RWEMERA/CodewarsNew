function stalinSort(arr) {
  if (arr.length === 0) return;
  let lastSurvivor = arr[0];
  let i = 1;
  while (i < arr.length) {
    if (arr[i] >= lastSurvivor) {
      lastSurvivor = arr[i];
      i++;
    } else {
      console.log("Расстрелять!");
      arr.splice(i, 1);
    }
  }
}
​