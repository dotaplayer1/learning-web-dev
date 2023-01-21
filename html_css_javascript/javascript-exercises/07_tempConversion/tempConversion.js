const convertToCelsius = function(fahrenheit) {
  return Math.round(((fahrenheit - 32) * (5.0 / 9.0)) * 10) / 10;
};

const convertToFahrenheit = function(celsius) {
  return Math.round((celsius * (9.0 / 5.0) + 32) * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
