function LetterChanges(str) { 

    //get each letter ASCII value from str
    //increment eachLetterASCII val and change that back to char
    //if char is a vowel, uppercase it.
    //join all the char's together and print the ans;
    
      let strArr = str.split('');
      let buildLetters = [];
      let ans = null;
      
      for(let i = 0; i < strArr.length; i++) {
          
          ans = charCodeConvert(strArr[i]);
          
          if(ans === "a" || ans === "e" || ans === "i" || ans === "o" || ans === "u") {
              ans = ans.toUpperCase();
          } else {
              ans = ans.toLowerCase();
          }
          
          buildLetters[i] = ans;
      }
      
    let output = buildLetters.join('');
    
    return output;
  }

function charCodeConvert(char){
    let charVal = char.charCodeAt();
    let poop = null;
    if(charVal > 64 && charVal < 91 || charVal > 96 && charVal < 123) {
        charVal++;
        poop = String.fromCharCode(charVal);
        
        return poop;
    }
    return char;
}
     
  // keep this function call here 
LetterChanges(readline());