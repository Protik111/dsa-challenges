function phoneNumberDirectory(strArr) {
  const dictionary = new Map();

  strArr.forEach((str) => {
    const [name, phone] = str.split(":");
    dictionary.set(name, phone);
  });

  return dictionary;
}

module.exports = phoneNumberDirectory;
