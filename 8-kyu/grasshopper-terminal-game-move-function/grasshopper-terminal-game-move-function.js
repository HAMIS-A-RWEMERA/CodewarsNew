function move(position, roll) {
  let spacesToMove = roll * 2;
  let finalPosition = position + spacesToMove;
  return finalPosition;
}
​