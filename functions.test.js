const functions = require("./functions.js");

test("Adds 40 + 2 to equal 42", () => {
  expect(functions.add(40, 2)).toBe(42);
});
test("Adds 40 + 2 to NOT equal 42", () => {
  expect(functions.add(2, 2)).not.toBe(42);
});
test("Multiple 2 by 2 equals to 4", () => {
  expect(functions.multiple(2, 2)).toMatchSnapshot();
});
test("Should be null", () => {
  expect(functions.isNull()).toBeNull();
});
test("Should be falsy", () => {
  expect(functions.checkVal(null)).toBeFalsy();
});
test("User should be Dimitri Ivashchuk object", () => {
  expect(functions.createUser()).toEqual({
    firstName: "Dimitri",
    lastName: "Ivashchuk"
  });
});
test("Should be under 9999", () => {
  const load1 = 5000;
  const load2 = 4998;
  expect(load1 + load2).toBeLessThan(9999);
});
test("There is no li in a string", () => {
  expect("string").not.toMatch(/li/);
});
test("Admin should be in usernames", () => {
  usernames = ["dima", "max", "administator"];
  expect(usernames).toContain("administator");
});
test("User fetched name should be Leanne Graham", () => {
  expect.assertions(1);
  return functions.fetchUser().then(data => {
    expect(data.name).toEqual("Leanne Graham");
  });
});
