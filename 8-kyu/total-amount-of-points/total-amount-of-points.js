 function points(games) {
  let totalPoints = 0;
  for (let i = 0; i < games.length; i++) {
    let game = games[i];
    let x = Number(game[0]);
    let y = Number(game[2]);
    totalPoints += (x > y) ? 3 : (x === y) ? 1 : 0;
    }
  return totalPoints;
}
​