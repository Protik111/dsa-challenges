function validatePassword(password) {
  if (password?.length < 8) return false;

  const hasUppercase = [...password].some((char) => char >= "A" && char <= "Z");
  const hasLowercase = [...password].some((char) => char >= "a" && char <= "z");
  const hasDigit = [...password].some((char) => char >= "0" && char <= "9");

  return hasUppercase && hasLowercase && hasDigit;
}

module.exports = validatePassword;
