function reverseString(str) {
    if (typeof(str) !== "string") {
        return "must be a string";
    }
    return str.split("").reverse().join("");
}

module.exports = reverseString;