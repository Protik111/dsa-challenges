function sumOfEvenSquares(numbers) {
  return numbers
    .filter((num) => num % 2 === 0)
    .map((num) => num ** 2)
    .reduce((sum, square) => {
      return sum + square;
    }, 0);
}

module.exports = sumOfEvenSquares;
