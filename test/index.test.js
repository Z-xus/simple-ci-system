// test/index.test.js
const logMessage = require("../index");

test("logs the correct message", () => {
  const message = logMessage();
  expect(message).toBe("Hello, CI World!");
});
