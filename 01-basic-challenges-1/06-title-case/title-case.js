function titleCase(title) {
  //coverting string into array and make elements where there is a space
  const wordsArr = title.toLowerCase().split(" ");

  for (let i = 0; i < wordsArr.length; i++) {
    wordsArr[i] = wordsArr[i][0].toUpperCase() + wordsArr[i].slice(1);
  }

  //coverting array into string by adding space after each word
  return wordsArr.join(" ");
}

module.exports = titleCase;
