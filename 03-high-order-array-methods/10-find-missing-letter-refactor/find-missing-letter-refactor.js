function findMissingLetter(letters) {
  if (letters?.letters < 2) return false;

  const uniCodes = letters.map((char) => char.charCodeAt());

  let start = letters[0].charCodeAt(0);

  const missingCode = uniCodes.find((uniCode) => {
    if (uniCode - start > 1) {
      return true;
    }
    start = uniCode;
    return false;
  });

  if (missingCode) {
    return String.fromCharCode(start + 1);
  }

  return null;
}

module.exports = findMissingLetter;
