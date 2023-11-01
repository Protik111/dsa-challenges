function formatPhoneNumber(numberArr) {
  const areaCode = numberArr.slice(0, 3).join("");
  const prefix = numberArr.slice(3, 6).join("");
  const lineNumber = numberArr.slice(6).join("");

  return `(${areaCode}) ${prefix}-${lineNumber}`;
}

module.exports = formatPhoneNumber;
