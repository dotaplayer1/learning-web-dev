function capitalize(str) {
    if (typeof(str) !== "string") {
        return "not a string";
    }
    let capitalizedStr = str.charAt(0).toUpperCase() + str.slice(1);
    return capitalizedStr;
}

module.exports = capitalize;