<?php 

function LongestWord($sen) {  

// split up sentence by each word and save into a unit $sen_array
// filter through $sen_array and only keep letters from it
// save the cleaned words into $clean_array
// compare the length of each word in $clean_array and print the $longest_word.

$sen_array = explode(" ",$sen);
$clean_array = array();

for ($i = 0; $i < count($sen_array); $i++) {
    $clean_word = trim($sen_array[$i], "\!\&\.\|\/\,\;\[\]\{\}\(\)\~\:\?\>\<");
    $clean_array[] = $clean_word;
}

$longest_word = "";

for ($j = 0; $j < count($clean_array); $j++) {
    if (strlen($clean_array[$j]) > strlen($longest_word)) {
        $longest_word = $clean_array[$j];
    }
}
return $longest_word;

}
   
// keep this function call here  
echo LongestWord(fgets(fopen('php://stdin', 'r')));  

?>
