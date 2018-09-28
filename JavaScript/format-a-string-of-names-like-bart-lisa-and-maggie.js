/*
  INSTRUCTIONS
  =============================================================
  Given: an array containing hashes of names

  Return: a string formatted as a list of names separated by commas except for the last two names, which should be separated by an ampersand.

  Example:

  list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
  // returns 'Bart, Lisa & Maggie'

  list([ {name: 'Bart'}, {name: 'Lisa'} ])
  // returns 'Bart & Lisa'

  list([ {name: 'Bart'} ])
  // returns 'Bart'

  list([])
  // returns ''
  Note: all the hashes are pre-validated and will only contain A-Z, a-z, '-' and '.'.
*/

/*
  MY SOLUTION
*/

function list(names){
  let message = '';
  switch(names.length) {
    case 0:
      return '';
    case 1:
      return names[0].name;
    case 2:
      return names[0].name + ' & ' + names[1].name;
    default: {
      for(let i = 0; i < names.length; i++) {
        if(i != names.length - 2) {
          //Not the second to last character.
          message = message + names[i].name + ', ';
        } else {
          //Second to last character.
          message = message + names[i].name + ' & ' + names[i + 1].name;
          return message;
        }
      }  
    }
    
  }
}
