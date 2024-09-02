function highestScoringWord(sentence) {
  const words = sentence.split(" ");

  const wordsIntoVal = words.map((word) =>
    Array.from(word).reduce(
      (score, letter) => score + letter.charCodeAt(0) - 96,
      0
    )
  );

  const highestScore = Math.max(...wordsIntoVal);
  const indexOfHighestScore = wordsIntoVal.indexOf(highestScore);

  return words[indexOfHighestScore];
}

module.exports = highestScoringWord;
