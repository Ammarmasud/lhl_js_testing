var check = function (givenNum) {
  var checkNum = String(givenNum).split("").reverse();
  var total = 0;

  for (var i in checkNum) {
    if (i % 2 !== 0 && Number(checkNum[i])*2 <= 9) {
      checkNum[i] = Number(checkNum[i])*2;
    } else if (i % 2 !== 0 && Number(checkNum[i])*2 > 9) {
      checkNum[i] = Number(checkNum[i])*2 - 9;
    } else {
      checkNum[i] = Number(checkNum[i])
    }
    total += checkNum[i];
  }

  return total % 10 === 0
};

// console.log(check(79927398713));
module.exports = check;