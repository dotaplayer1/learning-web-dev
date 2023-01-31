const palindromes = function (input) {
    let str = input.replace(/[^\w\s]|_/g, "").replace(/\s+/g, "");
    str = str.toLowerCase();
    return str === str.split("").reverse().join("") ? true :false;
};

palindromes("A car, a man, a maraca.");

// Do not edit below this line
module.exports = palindromes;
