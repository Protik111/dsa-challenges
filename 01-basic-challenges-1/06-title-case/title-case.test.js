const titleCase = require("./title-case");

test("Converting string to title case", () => {
  expect(titleCase("hello world")).toBe("Hello World");
  expect(titleCase("javascript programming")).toBe("Javascript Programming");
  expect(titleCase("openai chAtbot")).toBe("Openai Chatbot");
});
