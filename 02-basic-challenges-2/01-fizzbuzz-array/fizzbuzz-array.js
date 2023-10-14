function fizzBuzzArray(number) {
  let newArr = [];
  for (let i = 1; i <= number; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      newArr.push("FizzBuzz");
    } else if (i % 3 === 0) {
      newArr.push("Fizz");
    } else if (i % 5 === 0) {
      newArr.push("Buzz");
    } else {
      newArr.push(i);
    }
  }

  return newArr;
}

module.exports = fizzBuzzArray;
