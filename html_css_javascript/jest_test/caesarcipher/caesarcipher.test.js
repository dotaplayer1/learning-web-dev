const caesarcipher = require('./caesarcipher');

test("deciphers a normal string", () => {
    expect(caesarcipher("attack at dawn", 5)).toBe("fyyfhp fy ifbs");
})

test("rounds shift up if user inputs float", () => {
    expect(caesarcipher("attack at dawn", 4.5)).toBe("fyyfhp fy ifbs");
})

test("deciphers a string with every letter inside", () => {
    expect(caesarcipher("abcdefghijklmnopqrstuvwxyz ABCDEFGHIJKLMNOPQRSTUVWXYZ", 18)).toBe("stuvwxyzabcdefghijklmnopqr STUVWXYZABCDEFGHIJKLMNOPQR");
})

test("deciphers a string with numbers", () => {
    expect(caesarcipher("attack at dawn555", 5)).toBe("fyyfhp fy ifbs555");
})

test("rejects if shift isnt a int", () => {
    expect(caesarcipher("test", "test")).toBe("error");
})

test("rejects if message isnt a string", () => {
    expect(caesarcipher(1, 1)).toBe("error");
})
