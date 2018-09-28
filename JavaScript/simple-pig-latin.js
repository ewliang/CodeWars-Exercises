/*
  INSTRUCTIONS
  =============================================================
  Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

  Examples
  pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
  pigIt('Hello world !');     // elloHay orldway !
*/

/*
  MY SOLUTION
*/

function pigIt(str){
  var arr = str.split(' '); //Convert string to array.
  var finalString = '';
  for(let i = 0; i < arr.length; i++) {
    if((arr[i] >= 'a' && arr[i] <= 'z') || (arr[i] >= 'A' && arr[i] <= 'Z')) { //Alpha check.
      // Current "word" is a word - proceed with modifications.
      let tempString = arr[i] + arr[i][0] + 'ay'; //Append first character of the word to the end and add 'ay'
      tempString = tempString.substr(1); //Remove 1st character from string.
      finalString = finalString + tempString + ' '; //Remove any whitespace padding and return the final fully modified string.
    } else {
      // Current "word" is a punctuation or number - make no modifications and append as is.
      finalString = finalString + arr[i] + ' ';
    }
  }
  return finalString.trim();
}
