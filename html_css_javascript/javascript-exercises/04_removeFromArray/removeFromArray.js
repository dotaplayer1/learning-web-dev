const removeFromArray = function() {
    tempArr = arguments[0];
    for (let j = 1; j < arguments.length; j++) {
        for (let i = 0; i < tempArr.length; i++) {
            if (tempArr[i] === arguments[j]) {
                tempArr.splice(i, 1);
            }
        }
    }
    return tempArr;
};

// Do not edit below this line
module.exports = removeFromArray;
