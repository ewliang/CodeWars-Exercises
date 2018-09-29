/*
  INSTRUCTIONS
  =============================================================

*/

/*
  MY SOLUTION
*/

function factorial(n){
  let answer = 1;
  for(i = n; i > 0; i--) {
    answer = answer * i;
  }
  return answer.toString();
}
