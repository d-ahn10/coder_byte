<?php 

function LongestWord($sen) {  

// split up sentence by each word and save into a unit $sen_array
// filter through $sen_array and only keep letters from it
// save the cleaned words into $clean_array
// compare the length of each word in $clean_array and print the $longest_word.

$sen_array = explode(" ", $sen);

$longest_word = "";

    for ($i = 0; $i < count($sen_array); $i++) {
        
        $newString = preg_replace('/\W/i', '', $sen_array[$i]);
        
        $sen_array[$i] = $newString;
    }

    for ($j = 0; $j < count($sen_array); $j++) {
        if (strlen($sen_array[$j]) > strlen($longest_word)) {
            $longest_word = $sen_array[$j];
        }
    }
    
return $longest_word;

}
   
// keep this function call here  
echo LongestWord(fgets(fopen('php://stdin', 'r')));  

?>
