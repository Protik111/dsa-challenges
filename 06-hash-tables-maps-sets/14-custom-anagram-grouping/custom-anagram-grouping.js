const HashTable = require("./HashTable");

function anagramGrouping(words) {
  const anagramGroups = new HashTable();

  for (const word of words) {
    const sortedWord = word.split("").sort().join("");

    if (anagramGroups.has(sortedWord)) {
      anagramGroups.get(anagramGroups).push(word);
    } else {
      anagramGroups.set(sortedWord, [word]);
    }
  }

  return anagramGroups.getValues();
}

module.exports = anagramGrouping;
