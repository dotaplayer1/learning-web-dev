let add7 = (num) => num + 7;
console.log(add7(10));

let multiply = (a, b) => a * b;
console.log(multiply(5, 4));

let capitalize = (str) => {
    let tempStr = str.toLowerCase();
    return tempStr.charAt(0).toUpperCase() + tempStr.slice(1);
}

console.log(capitalize("hello"));
console.log(capitalize("HELLO"));
console.log(capitalize("heLLo"));

let lastLetter = (str) => str.slice(-1);
console.log(lastLetter("abcd"));