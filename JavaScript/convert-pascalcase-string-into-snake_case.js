/*
  INSTRUCTIONS
  =============================================================
  Complete the function/method so that it takes CamelCase string and returns the string in snake_case notation. Lowercase characters can be numbers. If method gets number, it should return string.

  Examples:

  //  returns test_controller
  toUnderscore('TestController');

  // returns movies_and_books
  toUnderscore('MoviesAndBooks');

  // returns app7_test
  toUnderscore('App7Test');

  // returns "1"
  toUnderscore(1);
*/

/*
  MY SOLUTION
*/

function toUnderscore(string) {
  string = string.toString(); //Make sure the argument is actually a string to handle numerical inputs.
  var answer = '';
  //Check for capital letters.
  for(let i = 0; i < string.length; i++) {
    switch(string[i]) {
      case 'A':
      case 'B':
      case 'C':
      case 'D':
      case 'E':
      case 'F':
      case 'G':
      case 'H':
      case 'I':
      case 'J':
      case 'K':
      case 'L':
      case 'M':
      case 'N':
      case 'O':
      case 'P':
      case 'Q':
      case 'R':
      case 'S':
      case 'T':
      case 'U':
      case 'V':
      case 'W':
      case 'X':
      case 'Y':
      case 'Z': {
        //Capital letters found. 
        if(i == 0) {
          //First Character - No preceding underscore needed.
          answer += string[i].toLowerCase();
        } else {
          //Other characters or last character... - Preceding underscore needed.
          answer += '_' + string[i].toLowerCase();
        }
        break;
      }
      default: {
        //Non-capital alphabet characters detected, append as is.
        answer += string[i];
        break;
      }
    }
  }
  return answer;
}
