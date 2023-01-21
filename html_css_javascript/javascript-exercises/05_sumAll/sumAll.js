const sumAll = function(num1, num2) {
    if (typeof num1 != "number" || num1 < 0) {
        return "ERROR";
    }
    if (typeof num2 != "number" || num2 < 0) {
        return "ERROR";
    }
    if (num1 < num2) {
        let tempNum = num1;
        for (let i = num1; i <= num2; i++) {
            tempNum += i;
        }
        return tempNum - 1;
    } else {
        let tempNum = num2;
        for (let i = num2; i <= num1; i++) {
            tempNum += i;
        }
        return tempNum - 1; 
    }
};

// Do not edit below this line
module.exports = sumAll;
