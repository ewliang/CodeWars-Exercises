/*
  INSTRUCTIONS
  =============================================================
  In this example you have to validate if a user input string is alphanumeric. The given string is not nil, so you don't have to check that.

  The string has the following conditions to be alphanumeric:

  At least one character ("" is not valid)
  Allowed characters are uppercase / lowercase latin letters and digits from 0 to 9
  No whitespaces/underscore
*/

/*
  MY SOLUTION
*/

function alphanumeric(string){
  let regex = /^[a-zA-Z0-9]+$/ig; //The presence of ^ and $ detects for null or aka no input ""
  return regex.test(string) ? true:false;
}
