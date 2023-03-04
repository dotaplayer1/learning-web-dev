const analyzeArray = require('./analyzeArray');

test("Analyzes a array correctly", () => {
    const arrData = analyzeArray([1,8,3,4,2,6]);
    expect(arrData).toEqual({ average: 4, min: 1, max: 8, length: 6 });
})

test("Rejects arguments that arent an array", () => {
    expect(analyzeArray("I'm not a array!")).toBe("error");
})

test("works with float numbers", () => {
    const arrData = analyzeArray([1.5, 9, 5.6, 20, 17]);
    expect(arrData).toEqual({ average: 10.62, min: 1.5, max: 20, length: 5 });
})

test("Works with negative numbers", () => {
    const arrData = analyzeArray([-1, -2, 5, 6, 1, 2, 8]);
    expect(arrData).toEqual({ average: 2.71, min: -2, max: 8, length: 7 });
})

test("Works with empty arrays", () => {
    const arrData = analyzeArray([]);
    expect(arrData).toEqual({ average: 0, min: 0, max: 0, length: 0 });
})

test("Works when all elements in the array are 0", () => {
    const arrData = analyzeArray([0, 0, 0, 0, 0]);
    expect(arrData).toEqual({ average: 0, min: 0, max: 0, length: 5 });
})

test("Returns error if array contains data that isnt a number", () => {
    const arrData = analyzeArray([1, "String", 2, 3]);
    expect(arrData).toBe("error");
})