/*
  INSTRUCTIONS
  =============================================================
  Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

  Examples:

  solution('abc') // should return ['ab', 'c_']
  solution('abcdef') // should return ['ab', 'cd', 'ef']
*/

/*
  MY SOLUTION
*/
function solution(str){
   var splitStr = [];
   let tempString = str.split('');
   let pairCount = Math.ceil(tempString.length/2);
   if(tempString.length % 2 == 0) {
     // Even
     for(let i = 0; i < pairCount; i++) {
       // Iterate and push based on pair count.
       splitStr.push(tempString[i+i] + tempString[i + i + 1]);
     }
   } else {
     // Odd - Append underscore '_' to last character character.
     for(let i = 0; i < pairCount; i++) {
       // Iterate and push based on pair count.
       // Check if current character is the last character.
       if(i != tempString.length - 1) {
         // Not the last character
         if((i + 1) == pairCount) {
            splitStr.push(tempString[i + i] + '_');
         } else {
         	  splitStr.push(tempString[i + i] + tempString[i + i + 1]);
         }
       }
     }
   }
   return splitStr;
}
