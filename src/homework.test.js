const sum = require('./homework.js');

describe("test countDown", () => {
  it("countDown from 3", () => {
    const result = countDown(3);
    expect(result).toBe(3,2,1);
  });
});