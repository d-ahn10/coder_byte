function SimpleSymbols(str) { 
    
    // set a flag for firstPlus to false; only flip if a plus at first is found.
    // set a flag for letterFound to false; only flip if a letter is found.
    // set a flag for lastPlus to false; only flip if a plus at last is found.
    // after going through the str, if all flags are set to true, return true; 
    // else return false.
    
    let firstPlus = false;
    let letterFound = false;
    let lastPlus = false;
    let output = false;
    
    if(str[0] === "+") {
            firstPlus = true;
    }
    
    for (let i = 1; i < str.length; i++) {
        let indexChecker = str[i];
        
        if (str.charCodeAt(i) > 96 && str.charCodeAt(i) < 123){
            letterFound = true;
        }
        
        if (indexChecker === "+") {
            lastPlus = true;
            if (str[i-1] !== str.charCodeAt(i - 1) > 96 && str[i-1] !== str.charCodeAt(i - 1) < 123 || str[i-1] !== "+") {
                output = false;
            }
        }
    }
    if(firstPlus && letterFound && lastPlus) {
        output = true;
    }
  return output; 
         
}
   
// keep this function call here 
SimpleSymbols(readline());
