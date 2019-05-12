function LetterCapitalize(str) { 
    
    let splitStr = str.split(' ');
    
        for(let i = 0; i < splitStr.length; i++) {
            let eachWord = splitStr[i];
            let splitEachWord = eachWord.split('');
            let capFirstLetter = splitEachWord[0].toUpperCase();
            splitEachWord[0] = capFirstLetter;
            let cappedWord = splitEachWord.join('');
            splitStr[i] = cappedWord;
            }
        
    return splitStr.join(' ');
}
   
// keep this function call here 
LetterCapitalize(readline());