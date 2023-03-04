function analyzeArray(arr) {
    function obj1 (min, max, average, length) {
        this.average = average;
        this.min = min;
        this.max = max;
        this.length = length;
    }
    if (Array.isArray(arr) === false) {
        return "error";
    }
    let min = 0;
    let max = 0;
    let length = 0;
    let average = 0;
    let total = 0;
    if (arr.length)  {
        min = arr[0];
        max = arr[0];
    }   
    for (let i = 0; i < arr.length; i++) {
        if (typeof(arr[i]) !== "number") {
            return "error";
        }
        total += arr[i];
        if (arr[i] > max) max = arr[i];
        if (arr[i] < min) min = arr[i];
        length++;
    }
    if (length > 0) {
        average = total / length;
        average = +average.toFixed(2);
    }
    let returnValue = new obj1 (min, max, average, length);
    return returnValue;
}

module.exports = analyzeArray;