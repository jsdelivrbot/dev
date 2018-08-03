//Evaluates the given code as PHP.
// be careful when using this and validata any data passed to it beforehand
// The code will be executed in the scope of the code calling eval(). 
// Thus any variables defined or changed in the eval() call will remain visible after it terminates.
// don't put <?php ?> tags in it.

$string = "beautiful";
$time = "winter";

$str = 'This is a $string $time morning!';
echo $str. "<br>";

eval("\$str = \"$str\";");
echo $str;

// prints:
// This is a $string $time morning!
// This is a beautiful winter morning!
