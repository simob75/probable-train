/**
*  Palindrome check algorithm in JavaScript
*
*/
function checkPalindrome(string) {
    string = string.toLowerCase();
    var mycharArr = string.split('');
    var acceptedChars = 'abcdefghijklmnopqrstuvwxyz'.split('');
    
    var lettersArr = [];
    mycharArr.forEach(char => {
           if (acceptedChars.indexOf(char) > -1) lettersArr.push(char);   
           });
     return lettersArr.join('') === lettersArr.reverse().join('');       
}


function checkPalindrome(string) {
    string = string.toLowerCase().replace(/[^a-z0-9]+/g, '');
    return string === string.split('').reverse().join('');
}


checkPalindrome("Do Geese See God?");
console.log(checkPalindrome("Do Geese See God?")); //returns true
console.log(checkPalindrome("A Santa Lived As a Devil At NASA")); //returns  true
console.log(checkPalindrome("Different strings"));//returns false
