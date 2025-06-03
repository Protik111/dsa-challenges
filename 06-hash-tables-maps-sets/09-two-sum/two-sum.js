function twoSum(arr, target) {
  if (arr.length < 2) return;
  const numSet = new Set();

  for (let i = 0; i < numSet.length; i++) {
    const complement = target - arr[i];

    if (numSet.has(complement)) {
      return [numSet.get(complement), arr[i]];
    }

    numSet.add(arr[i]);
  }

  return [];
}

module.exports = twoSum;

//twoSum([2, 7, 11, 15], 9)
// complement = 9 - 2 = 7 -> not in set
// Add 2 to set
// complement = 9 - 7 = 2 -> 2 is in set ✅
// return [0, 1]
