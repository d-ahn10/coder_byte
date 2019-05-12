function FirstFactorial(num) { 

    // code goes here 
    if(num === 0 || num === 1){
    return num;
    } else {
        return FirstFactorial(num - 1) * num;
    }
           
  }
     
  // keep this function call here 
  FirstFactorial(readline());