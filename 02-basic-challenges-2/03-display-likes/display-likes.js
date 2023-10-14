function displayLikes(personArr) {
  if (!Array.isArray(personArr)) {
    return false;
  }

  const length = personArr.length;
  let text = "";

  if (personArr.length === 0) {
    text = "no one likes this";
  } else if (personArr.length === 1) {
    text = `${personArr[0]} likes this`;
  } else if (personArr.length === 2) {
    text = `${personArr[0]} and ${personArr[1]} like this`;
  } else if (personArr.length === 3) {
    text = `${personArr[0]}, ${personArr[1]} and ${personArr[2]} like this`;
  } else if (personArr.length >= 3) {
    text = `${personArr[0]}, ${personArr[1]} and ${
      length - 2
    } others like this`;
  }

  return text;
}

module.exports = displayLikes;
