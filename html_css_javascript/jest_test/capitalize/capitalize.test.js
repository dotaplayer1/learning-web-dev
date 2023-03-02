const capitalize = require("./capitalize");

test("capitalizes the string correctly", () => {
    expect(capitalize("hello world")).toBe("Hello world");
})

test("returns 'not a string' if argument is not a string", () => {
    expect(capitalize(1)).toBe("not a string");
})