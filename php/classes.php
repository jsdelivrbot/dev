<?php
/* ==========================================================================
//basic
========================================================================== */
class MyClass {
	private $string_var = "my string";
	public function myMethod() {
		echo $this->string_var;	
	}
}

$myClass = new MyClass();

$myClass->myMethod();


//accessing properties using variable property names.
//$class->{<property-to-evaluate-to>}
class foo {
    var $bar = 'I am bar.';
    var $arr = array('I am A.', 'I am B.', 'I am C.');
    var $r   = 'I am r.';
}

$foo = new foo();
$bar = 'bar';
$baz = array('foo', 'bar', 'baz', 'quux');
echo $foo->$bar . "\n";
echo $foo->{$baz[1]} . "\n";

$start = 'b';
$end   = 'ar';
echo $foo->{$start . $end} . "\n";

$arr = 'arr';
echo $foo->{$arr[1]} . "\n";

?>