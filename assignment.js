// 1. kilometerToMeter start
function kilometerToMeter(kilometer) {
  if (kilometer < 0) {
    var massage = "Distance can not be nagative";
    return massage;
  } else {
    var meter = kilometer * 1000;
    return meter;
  }
}
var result = kilometerToMeter(-1);
console.log(result);
// 1. kilometerToMeter end

// 2. budgetCalculator start
function budgetCalculator(watch, phone, laptop) {
  if (watch > 0 && phone > 0 && laptop) {
    var watchPrice = watch * 50;
    var phonePrice = phone * 100;
    var laptopPrice = laptop * 500;
    var totalBudget = watchPrice + phonePrice + laptopPrice;
    return totalBudget;
  } else {
    return "Phone price can not be a nagative value";
  }
}
var result = budgetCalculator(3, -3, 3);
console.log(result);
// 2. budgetCalculator end

// 3. megaFriend start
function megaFriend(array) {
  if (array.length == 0) {
    return "The array is emty";
  } else {
    var max = array[0].length;
    for (var i = 1; i < array.length; i++) {
      if (max < array[i].length) {
        max = array[i].length;
        var maxValue = array[i];
      }
    }
    return maxValue;
  }
}
var result = megaFriend(["shafiq", "parvez", "abusaleh", "mamun", "rafiq"]);
console.log(result);
// 3. megaFriend end
