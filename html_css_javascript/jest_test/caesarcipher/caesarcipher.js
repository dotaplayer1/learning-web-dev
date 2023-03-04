function caesarcipher(message, shift) {
    if (
        typeof(message) !== "string"
        || typeof(shift) !== "number"
        || shift < 0
    ) {
        return "error";
    }
    shift = Math.ceil(shift);
    shift = shift % 26;
    message = message.split("");
    for (let i = 0; i < message.length; i++) {
        if (
            message[i].charCodeAt(0) >= 97
            && message[i].charCodeAt(0) <= 122
        ) {
            message[i] = String.fromCharCode((message[i].charCodeAt(0) + shift - 97) % 26 + 97);
        } 
        if (
            message[i].charCodeAt(0) >= 65
            && message[i].charCodeAt(0) <= 90
        ) {
            message[i] = String.fromCharCode((message[i].charCodeAt(0) + shift - 65) % 26 + 65);
        }
    }
    return message.join("");
}

module.exports = caesarcipher;