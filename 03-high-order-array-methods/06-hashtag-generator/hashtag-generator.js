function capitalizeWord(word) {
  const capitalizedWord = word.slice(0, 1).toUpperCase() + word.slice(1);
  return capitalizedWord;
}

function generateHashtag(str) {
  if (str.trim() === "" || str.length >= 140) {
    return false;
  }
  const strArr = str.split(" ");
  let hashed = "";
  strArr.forEach((element) => {
    const capitalizedWord = capitalizeWord(element);
    hashed = hashed + capitalizedWord;
  });
  return `#${hashed}`;
}

module.exports = generateHashtag;
