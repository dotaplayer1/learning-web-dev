const fibonacci = function(input) {
    if (typeof input == "string") {
        input = parseInt(input);
    }
    if (input <= 0) {
        return "OOPS";
    }
    let n1 = 0;
    let n2 = 1;
    let count = 0;
    while (count < input) {
        let nth = n1 + n2; 
        n1 = n2;
        n2 = nth;
        count += 1;
    }
    return n1;
};

// Do not edit below this line
module.exports = fibonacci;
