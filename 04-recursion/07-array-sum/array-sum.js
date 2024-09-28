function arraySum(arrNum) {
  if (arrNum?.length === 0) {
    return 0;
  }

  return arrNum[0] + arraySum(arrNum.slice(1));
}

module.exports = arraySum;
