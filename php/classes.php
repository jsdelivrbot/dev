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

/* ==========================================================================
//constructors/destructors
========================================================================== */

class MyClass {
	public function __construct($initVar1, $initVar2) {
		echo 'object just instantiated with: ' . $initVar1 . ' ' . $initVar2 . '. ';
	}

	public function __destruct() {
		echo 'Object destroyed';
	}
}

$myClass = new MyClass('foo', 'bar');

/* ==========================================================================
//extending classes
========================================================================== */

class Fungi {
	private $spores = '';
	public function __construct($spores) {
		$this->spores = $spores;
	}
	public function getSpores() {
		echo $this->spores . "\n";
	}
}

class Mushroom extends Fungi {
	private $size = 'big';
	public function getSize() {
		echo $this->size . "\n";
	}
}

$white_mushroom = new Mushroom('airborn');
$white_mushroom->getSize();
$white_mushroom->getSpores();

/* ==========================================================================
//serialize/deserialize
========================================================================== */
// to save the object to file or send over the network

$myObj = new bankAccount('246810', 'Morgan Freeman');
// serialize
$serialized = serialize ($myObj);
echo 'Object is serialized<br>';
// unserialize into new object
$newObj = unserialize ($serialized);
echo 'Object is unserialized<br>';
print_r ($newObj);

/* ==========================================================================
//variable property access
========================================================================== */

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

/* ==========================================================================
//static
========================================================================== */

class MyClass {
    const MY_CONST = 'my_const';
    
    public function myFunc() {
        echo static::MY_CONST;
    }
}

$myClass = new MyClass();

$myClass->myFunc();
//my_const

/* ==========================================================================
//class inside class
========================================================================== */

class Admin
{
    function init()
    {
        $tasks = new Tasks();
        $tasks->test();
    }
}

class Tasks
{
    function test()
    {
        //...
    }
}

$admin = new Admin();
$admin->init();

/* ==========================================================================
//std class
========================================================================== */

// std classes are simple objects (like in js)

//use
$page = new stdClass();
$page->name = 'Home';
$page->status = 1;
//or commonly convert an array to an object to create one
$obj = (object) array('1' => 'foo');
