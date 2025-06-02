function symmetricDifference(arr1, arr2) {
  const set1 = new Set(arr1);
  const set2 = new Set(arr2);

  const symmetricArr = [];

  for (const num of arr1) {
    if (!set2.has(num)) {
      symmetricArr.push(num);
    }
  }

  for (const num of arr2) {
    if (!set1.has(num)) {
      symmetricArr.push(num);
    }
  }

  return symmetricArr;
}

module.exports = symmetricDifference;
