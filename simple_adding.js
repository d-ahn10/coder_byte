function SimpleAdding(num) { 

    // set counter to 0
    // loop inside is decrementing the num
    // inside the loop keep adding to counter from num
    // print sum
    
    var counter = 0;
    
    for(var i = num; i > 0; i--){
        counter += i;
    }
    return counter; 
           
  }
     
  // keep this function call here 
  SimpleAdding(readline());