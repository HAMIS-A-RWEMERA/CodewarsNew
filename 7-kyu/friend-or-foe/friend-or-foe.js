function friend(friends) {
  let myRealFriends = [];
  for (let i = 0; i < friends.length; i++) {
    let currentName = friends[i];
    if (currentName.length === 4) {
      myRealFriends.push(currentName);
    }
  }
  return myRealFriends;
}
​