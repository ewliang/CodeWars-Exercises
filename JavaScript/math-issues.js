/*
  INSTRUCTIONS
  =============================================================
  Oh no, our Math object was "accidently" reset. Can you re-implement some of those functions? We can assure, that only non-negative numbers are passed as arguments. So you don't have to consider things like undefined, null, NaN, negative numbers, strings and so on.

  Here is a list of functions, we need:

  Math.round()
  Math.ceil()
  Math.floor()
*/

/*
  MY SOLUTION
*/

// Basically split the input on the decimal point which should give you 2 elements in a array.
// The [0] represents the whole number, [1] represents the decimal values.
// From here, the parts can be used respectively to each scenario.

Math.round = function(number) {
  var num = number.toString().split('.');
  if(num.length > 1) {
    if(num[1][0] >= 5) {
      return parseInt(num[0], 10) + 1;
    } else {
      return parseInt(num[0], 10);
    }
  } else {
    return number;
  }
};

Math.ceil = function(number) {
  var num = number.toString().split('.');
  if(num.length > 1) {
    if(num[1] > 0) {
      return parseInt(num[0], 10) + 1;
    }
  } else {
    return number;
  }
};

Math.floor = function(number) {
	var num = number.toString().split('.');
  return parseInt(num[0], 10);
};
