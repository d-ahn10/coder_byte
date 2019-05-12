function LongestWord(sen) { 
  
    let cleanSen = sen.match(/\w{1,20}/gm);
    let currBigWord = "";
    
    for(let i = 0; i < cleanSen.length; i++) {
        let eachWord = cleanSen[i];
        if(currBigWord.length < eachWord.length) {
            currBigWord = eachWord;
        }
    }
    return currBigWord; 
           
  }
     
  // keep this function call here 
  LongestWord(readline());