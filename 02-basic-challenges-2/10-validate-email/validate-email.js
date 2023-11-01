function validateEmail(email) {
  if (!email.startsWith("@")) {
    const emailArr = email.split("");
    if (emailArr.includes("@") && emailArr.includes(".")) {
      return true;
    }
    return false;
  }
  return false;
}

module.exports = validateEmail;
