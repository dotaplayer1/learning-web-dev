const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
  let total = 0;
	for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
};

const multiply = function(arr) {
  let total = arr[0];
	for (let i = 1; i < arr.length; i++) {
    total *= arr[i];
  }
  return total;
};

const power = function(a, b) {
	return Math.pow(a, b);
};

const factorial = function(a) {
	if (a === 0) {
    return 1;
  }
  let factorialNumber = 1;
  while (a >= 1) {
    factorialNumber *= a;
    a -= 1;
  }
  return factorialNumber;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
