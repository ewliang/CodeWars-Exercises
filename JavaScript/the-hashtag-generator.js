/*
  INSTRUCTIONS
  =============================================================
  The marketing team is spending way too much time typing in hashtags.
  Let's help them with out own Hashtag Generator!

  Here's the deal:

  It must start with a hashtag (#).
  All words must have their first letter capitalized.
  If the final result is longer than 140 chars it must return false.
  If the input or the result is an empty string it must return false.
  Examples
  " Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
  "    Hello     World   "                  =>  "#HelloWorld"
  ""                                        =>  false
*/

/*
  MY SOLUTION
*/
function generateHashtag (str) {
  let formattedStr = str.trim();
  formattedStr = formattedStr.split(' ');
  if(formattedStr.length == 0 || formattedStr[0] == '') {
    return false;
  }
  let answer = '#';
  for(let i = 0; i < formattedStr.length; i++) {
    answer = answer + formattedStr[i].charAt(0).toUpperCase() + formattedStr[i].substring(1);
  }
  if(answer.length > 140) {
    return false;
  }
  return answer;
}
