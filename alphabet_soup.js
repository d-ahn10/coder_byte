function AlphabetSoup(str) { 
    
        // split each letter into array
    //let strArr = str.split(''); 
    
        // sort it alphabetically
    //let orderedStrArr = strArr.sort(); 
    
        // join the alphabetically sorted array
    //let newStr = orderedStrArr.join(''); 
    
        // print the newly built string.
    //return newStr; 
  
  return str.split('').sort().join(''); //the one-liner solution
         
}
   
// keep this function call here 
AlphabetSoup(readline());
