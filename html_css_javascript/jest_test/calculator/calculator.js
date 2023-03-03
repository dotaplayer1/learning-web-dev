function calculator() {
    this.checkInput = function(input) {
        if (typeof(input) !== "number") return 0;
        return 1;
    }

    this.add = function(a, b) {
        if (this.checkInput(a) === 0 || this.checkInput(b) === 0) {
            return "error";
        }
        return a + b;
    }

    this.subtract = function(a, b) {
        if (this.checkInput(a) === 0 || this.checkInput(b) === 0) {
            return "error";
        }
        return a - b;
    }

    this.multiply = function(a, b) {
        if (this.checkInput(a) === 0 || this.checkInput(b) === 0) {
            return "error";
        }
        a *= b;
        return a;
    }

    this.divide = function(a, b) {
        if (this.checkInput(a) === 0 || this.checkInput(b) === 0) {
            return "error";
        }
        if (a % b === 0) {
            return(a / b);
        } else {
            return parseFloat(a) / b;
        }
    }
}

module.exports = calculator;