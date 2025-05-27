function wordFrequencyCounter(str) {
  if (str.length === 0) return {};

  const words = str.toLowerCase().split(/\W+/);

  const wordMap = new Map();

  for (const word of words) {
    if (word === "") continue;

    if (wordMap.get(word)) {
      wordMap.set(word, wordMap.get(word) + 1);
    } else {
      wordMap.set(word, 1);
    }
  }
  return wordMap;
}

module.exports = wordFrequencyCounter;
