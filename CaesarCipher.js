/**
* Function that uses the Caesar shift's logic
*
*/

function caesarCipher(str, num) {
  var num;
  var lCaseStr = str.toLowerCase();
  var letters = 'abcdefghijklmnopqrstuvwxyz'.split('');
  var newStr = '';
  
  for (var i = 0; i < lCaseStr.length; i++) {
    var currLetter = lCaseStr[i];
    if (currLetter === ' ') {
      newStr += currentLetter;
      continue;
    }
    var currIndex = letters.indexOf(currLetter);
    var newIndex = currIndex + num;
    if (newIndex > 25) newIndex = newIndex - 26;
    if (newIndex < 0) newIndex = 26 + newIndex;
    newStr += letters[newIndex];
  };
  
  return newStr;
}
caesarCipher('encrypt', 2);