function flattenArray(arrNumbers) {
  let numbers = [];

  for (const item of arrNumbers) {
    if (Array.isArray(item)) {
      numbers = numbers.concat(flattenArray(item));
    } else {
      numbers.push(item);
    }
  }

  return numbers;
}

module.exports = flattenArray;
