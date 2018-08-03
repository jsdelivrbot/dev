<?php
/* ==========================================================================
//general
========================================================================== */

$people = array(
   array('id'=>1, 'email'=>'john.smith@hotmail.com'),
   array('id'=>2, 'email'=>'paul.allen@microsoft.com'),
   array('id'=>3, 'email'=>'james.johnston@gmail.com'),
   array('id'=>4, 'email'=>'steve.buscemi@yahoo.com'),
   array('id'=>5, 'email'=>'doug.simons@hotmail.com')
);
?>

<?php foreach ($people as $person): ?>
	<tr>
		<td><?=$person['first_name'];?></td>
		<td><?=$person['last_name'];?></td>
		<td><?=$person['email'];?></td>
		<td><button class="info-popup" data-name="<?=$person['first_name'];?> <?=$person['last_name'];?>" data-email="<?=$person['email'];?>">alert info</button></td>
	</tr>
<?php endforeach; ?>


<?php

/* ==========================================================================
//check empty
========================================================================== */

//check for empty array
empty($myArray);

/* ==========================================================================
//count items in array
========================================================================== */

count($aray)

/* ==========================================================================
//array_map - execute a function for every value in an array
========================================================================== */

function myfunction($v)
{
  return($v*$v);
}
// Array
// (
//     [0] => 1
//     [1] => 4
//     [2] => 9
//     [3] => 16
//     [4] => 25
// )

$a=array(1,2,3,4,5);
print_r(array_map("myfunction",$a));

//or use with an anonymouse function
array_map(function($o) { echo $o; }, $a);
//12345

// when dealing with an array of objects, use it to return a new array with just the objects
// you want or add new ones to it, etc.
$list = array_map(function($o) {
	return object(['id' => $o->id, 'name' => $o->name]);
}, $people);

/* ==========================================================================
//loop key/value pair in array
========================================================================== */

$featured = array('key1' => 'value1', 'key2' => 'value2');

//just the key
foreach($featured as $value) {
  echo 'value: ' . $value . '<br>';
}

//the key and value
foreach($featured as $key => $value) {
  echo 'key: ' . $key . '<br>';
  echo 'value: ' . $value . '<br>';
}
//the first one stres both the key and value of the pair in the array

/* ==========================================================================
//convert a string to an array / array to string
========================================================================== */

//explode
//convert string to an array
$myString = "This is a short string";
$myArray = explode(" ", $myString);
print_r($myArray);

//implode
//convert array to string
$myArray = array ('This', 'is', 'a', 'short', 'string');
$myString = implode(" ", $myArray);
print_r($myString);

/* ==========================================================================
//array_filter
========================================================================== */

// Iterates over each value in the array passing them to the callback function. If the callback function returns true,
// the current value from array is returned into the result array. Array keys are preserved.
$array1 = array("a"=>1, "b"=>2, "c"=>3, "d"=>4, "e"=>5);
echo "Odd :\n";
print_r(array_filter($array1, function($o) {
    // returns whether the input integer is odd
    return($o & 1);
}));


//filter out nulls from an array

//useful to use with implode
$test_array = array(0=>"288",1=>"288",2=>null);
print_r(implode(',', array_filter($test_array)));
//288,288

//use array filter for explode as well
array_filter(explode(',', $c->required_certificates));

//also ensure the output is either an empty array or a filtered one
$output = array_filter($input_array) ?: 'empty';


/* ==========================================================================
//trim whitespace
========================================================================== */

$string = "          This is a string with lots of whitespace           ";
echo "Before trim [$string] \n";

$trimmedString = trim($string);
echo "After trim [$trimmedString] \n";

/* ==========================================================================
//comparing strings
========================================================================== */

// strcmp(string1, string2) - Accepts two strings as arguments, performs a case-sensitive comparison and returns a value depending on the match.
strcmp($string1, $string2);

// strcasecmp - Accepts two strings as arguments, performs a case-insensitive comparison and returns a value depending on the match.
strcasecmp($string1, $string2);

// strncmp() - Accepts three arguments - the two strings to be compared and the number of characters to be included in the comparison. Performs a case-sensitive comparison of specified number of characters from each string and returns a value depending on the result of the match.
strncmp($string1, $string2, 3);

// strncasecmp() - Accepts three arguments - the two strings to be compared and the number of characters to be included in the comparison. Performs a case-insensitive comparison of specified number of characters from each string and returns a value depending on the result of the match.
strncasecmp($string1, $string2, 3);

/* ==========================================================================
//accessing characters
========================================================================== */

$myString = "abcdefghijklmn";
$myChar = $myString{1};
echo "2nd Char = $myChar";

/* ==========================================================================
//find position of found string character
========================================================================== */

//returns the position of the last found occurance in the string
$myString = "abcdefghijklmn";
echo strpos($myString, 'def');

/* ==========================================================================
//remove part of a string
========================================================================== */

//this will remove cat from the string
$myString = "There is a cat in the tree.";
$subString = substr($myString, 11, 3);
echo "subString = $subString <br>";

/* ==========================================================================
//replace part of a string
========================================================================== */

//this will replace cat with dog
$myString = "There is a cat in the tree.";
$subString = substr_replace($myString, "dog", 11, 3);
echo "subString = $subString <br>";

/* ==========================================================================
//replace all occurances of an occurance in a string
========================================================================== */

$myString = "There is a cat in the tree, and I think it is my cat!";
echo "Original String = $myString<br>";
$myString = str_replace ("cat", "dog", $myString);
echo "New String = $myString<br>";

/* ==========================================================================
//reset
========================================================================== */

// reset the array's internal pointer to the first element
$stuff = array('foo', 'bar', 'baz');
echo current($stuff) . "<br>";
echo next($stuff)  . "<br>";
echo reset($stuff);

/* ==========================================================================
//current
========================================================================== */

//points to the current index of an array
//can use with next($my_array) to shift the index
current($my_array)

/* ==========================================================================
// check if key exists
========================================================================== */

//check whether a given key exists in an array
array_key_exists($key, $my_array);

/* ==========================================================================
// get keys from an array
========================================================================== */

//returns the keys, numeric and string, from the array.
$keys = array_keys($my_array);

/* ==========================================================================
// get part of an array
========================================================================== */

//return a subset of an array at the given keys
array_intersect_key($array, array_flip((array) $keys));

/* ==========================================================================
// add arrays together without resetting keys
========================================================================== */

// this will combine the two arrays, but keeping the left side array intact
// and adding anything left from the right array if it's longer than the left one
// indexed keys are added to items that don't already have them.
$array1 = array("color" => "red", 2, 4);
$array2 = array("a", "b", "color" => "green", "shape" => "trapezoid", 4);

$new_array = $array1+$array2;
echo $new_array;

// Array
// (
//     [color] => red
//     [0] => 2
//     [1] => 4
//     [shape] => trapezoid
//     [2] => 4
// )

/* ==========================================================================
// merge
========================================================================== */

// merge arrays together. (careful - this will reset the keys to numbered ones)
$array1 = array("color" => "red", 2, 4);
$array2 = array("a", "b", "color" => "green", "shape" => "trapezoid", 4);
$result = array_merge($array1, $array2);
print_r($result);

// array_merge_recursive
// The difference between this function and the array_merge() function is when two or more array 
// elements have the same key. Instead of override the keys, the array_merge_recursive() function 
// makes the value as an array.
$a1=array("a"=>"red","b"=>"green");
$a2=array("c"=>"blue","b"=>"yellow");
print_r(array_merge_recursive($a1,$a2));
//Array ( [a] => red [b] => Array ( [0] => green [1] => yellow ) [c] => blue )

/* ==========================================================================
// Exchanges all keys with their associated values in an array
========================================================================== */

$input = array("oranges", "apples", "pears");
$flipped = array_flip($input);

print_r($flipped);

// Array
// (
//     [oranges] => 0
//     [apples] => 1
//     [pears] => 2
// )

/* ==========================================================================
// Return new array with matching values
========================================================================== */

//compare the *values of two arrays, return the matches
//(use the existing keys of the first array)

$a1=array("a"=>"red","b"=>"green","c"=>"blue","d"=>"yellow");
$a2=array("e"=>"red","f"=>"green","g"=>"blue");

$result=array_intersect($a1,$a2);
print_r($result);

/* ==========================================================================
// check if values from one array are contained in another array
========================================================================== */

//check if values from one array are contained in another array
if (count($array1) == count(array_intersect(array_grab($array2, 'certificate_id'), $array1))) {
  //all values are contained
}

/* ==========================================================================
// remove duplicate values in an array
========================================================================== */

array_unique($input)

/* ==========================================================================
// sort an array alphabetically
========================================================================== */

//usort takes a function that compares each item in the array.
//the negative or positive retured int value determines the sort order of the item
usort($users, function ($a, $b) {
  // strcasecmp returns < 0 if str1 is less than str2; > 0 
  // if str1 is greater than str2, and 0 if they are equal.
  return strcasecmp($a->first_name, $b->first_name);
});

// sorts a shallow array. better to use than sort 
// because it doesn't reset the keys
// * it dosn't return the new array, it passes it by reference
$myArray = ['c', 'b', 'a'];
asort($myArray);
print_r($myArray);

/* ==========================================================================
// return values not present in another array
========================================================================== */

//Compares array1 against one or more other arrays and returns the values in array1 that are not present in any of the other arrays.
array_diff($array1, $array2);



