const logMessage = require("../index");

test("logs the correct message", () => {
  const start = performance.now(); // Record start time
  const message = logMessage();
  const end = performance.now(); // Record end time
  const duration = end - start; // Calculate the duration

  console.log(`Test duration: ${duration}ms`); // Log the duration

  // Store performance metrics
  expect(message).toBe("Hello, CI World!");
  expect(duration).toBeLessThan(100); // Example: Expect the test duration to be under 100ms
});
