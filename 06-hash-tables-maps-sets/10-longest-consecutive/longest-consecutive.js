function longestConsecutiveSequence(arr) {
  const numSet = new Set(arr);

  const longestSequence = 0;

  for (const num of numSet) {
    if (!numSet.has(num)) {
      let currentSum = num;
      let currentSequence = 1;

      if (numSet.has(currentSum + 1)) {
        currentSum++;
        currentSequence++;
      }

      longestSequence = Math.max(longestSequence, currentSequence);
    }
  }

  return longestSequence;
}

module.exports = longestConsecutiveSequence;
