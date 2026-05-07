function Allergies(score) {
  if (Number.isInteger(score) === false) {
    throw new Error("Input must be a whole number!");
  }
  let wallet = score;
  while (wallet > 255) {
    wallet = wallet - 256;
  }
  this.cleanScore = wallet;
  this.ALLERGY_SCORES = {
    "eggs": 1,
    "peanuts": 2,
    "shellfish": 4,
    "strawberries": 8,
    "tomatoes": 16,
    "chocolate": 32,
    "pollen": 64,
    "cats": 128
  };
  this.allergies = function() {
    let bag = [];
    let currentMoney = this.cleanScore;
    let namesToCheck = ["cats", "pollen", "chocolate", "tomatoes", "strawberries", "shellfish", "peanuts", "eggs"];
​
    for (let i = 0; i < namesToCheck.length; i++) {
      let name = namesToCheck[i];
      let cost = this.ALLERGY_SCORES[name];
      if (currentMoney >= cost) {
        bag.push(name);
        currentMoney = currentMoney - cost;
      }
    }
    return bag.sort();
  };
  this.isAllergicTo = function(allergen) {
    let myList = this.allergies();
    return myList.includes(allergen);
  };
}
​