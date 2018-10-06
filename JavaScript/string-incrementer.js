/*
  INSTRUCTIONS
  =============================================================
  Your job is to write a function which increments a string, to create a new string. If the string already ends with a number, the number should be incremented by 1. If the string does not end with a number the number 1 should be appended to the new string.

  Examples:
  foo -> foo1
  foobar23 -> foobar24
  foo0042 -> foo0043
  foo9 -> foo10
  foo099 -> foo100

  Attention: If the number has leading zeros the amount of digits should be considered.
*/

/*
  MY SOLUTION
*/

function incrementString (str) {
  // return incrementedString
  let regexPattern = /[0-9]+/;
  if(regexPattern.test(str)) {
    // Number Detected
    // Check where the number begins and use the index value to target the number.
    // Increment the number, and return it.
    let matchInfo = str.match(regexPattern);
    let strNumber = parseInt(matchInfo[0], 10) + 1;
	  let trueZeroCount; 
	  let answer = str.substring(0, matchInfo.index);
    let zeroDetector = 0;
    for(let i = 0; i < matchInfo[0].length; i++) {
      if(matchInfo[0][i] == 0) {
        zeroDetector++;
      } else {
        break;
      }
    }
    //Calculate Number of Preceding Zeroes
  	if((strNumber.toString().length - matchInfo[0].length) < 0) { 
  		trueZeroCount = (strNumber.toString().length - matchInfo[0].length) * -1; 
  	} else { 
  		trueZeroCount = (strNumber.toString().length - matchInfo[0].length); 
  	}
    //Append Preceding Zeroes to End Of Non-Numerical String
    if(zeroDetector > 0) {
    	for(let i = 0; i < trueZeroCount; i++) {
    		answer += '0';
    	}
    }
    //Finally, append the incremented number which had the preceding zeroes automatically removed earlier.
    answer += strNumber;
    return answer;
  } else {
    // No Numbers Detected - Return string with appended value 1
    return str + 1;
  }
}
