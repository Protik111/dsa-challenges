const HashTable = require("./HashTable");

function wordInstanceCounter(str, word) {
  const words = str.toLowerCase().split(/\w+/);
  const wordFrequency = new HashTable();
  const targetWord = word.toLowerCase();
  const count = 0;

  for (const currentWord of words) {
    //continue if the word is empty string
    if (currentWord === "") continue;

    if (wordFrequency.has(currentWord)) {
      wordFrequency.set(currentWord, wordFrequency.get(currentWord) + 1);
    } else {
      wordFrequency.set(currentWord, 1);
    }

    if (currentWord === targetWord) {
      count = wordFrequency.get(currentWord);
    }
  }

  return count;
}

module.exports = wordInstanceCounter;
