const calculator = require('./calculator');
let testCalc = new calculator();

test("rejects inputs that arent numbers", () => {
    expect(testCalc.add("maliciousinput", 1)).toBe("error");
})

test("adds 2 numbers", () => {
    expect(testCalc.add(1, 1)).toBe(2);
})

test("subtracts 2 numbers", () => {
    expect(testCalc.subtract(2, 1)).toBe(1);
})

test("multiplys 2 numbers", () => {
    expect(testCalc.multiply(2, 2)).toBe(4);
})

test("divides 2 numbers", () => {
    expect(testCalc.divide(4, 2)).toBe(2);
})

test("does not round result when dividing", () => {
    expect(testCalc.divide(5, 2)).toBe(2.5);
})