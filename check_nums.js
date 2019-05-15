function CheckNums(num1,num2) { 

  // add num1 and num2 then save to var "sum"
  // subtract num1 from sum and save that as num2
  // if num2 is greater than num1, print true;
  // else print false;
  // if num2 is same as num1, print -1;
  
  let output = false;
  
  let sum = num1 + num2;
  num2 = sum - num1;
  
  if (num2 > num1) {
      output = true;
  } else if (num2 == num1) {
      output = -1;
  }
  
  return output;
         
}
   
// keep this function call here 
CheckNums(readline());
