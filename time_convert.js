function TimeConvert(num) { 

  // 1 hr = 60 mins, 1 min = 60 seconds
  // num is in mins
  let hour = Math.floor(num / 60);
  let minutes = (num % 60);
  return hour + ":" + minutes;
         
}
   
// keep this function call here 
TimeConvert(readline());
