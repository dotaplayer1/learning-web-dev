const repeatString = function(input, count) {
    tempStr = "";
    if (count >= 1) { 
        for (let i = 1; i <= count; i++) {
            tempStr += input;
        }
    } else if (count < 0) {
        return "ERROR";
    } else {
        return "";
    }
    return tempStr;
};

// Do not edit below this line
module.exports = repeatString;
