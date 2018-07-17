<?php

//basic example
spl_autoload_register(function ($class_name) {
    include $class_name . '.php';
});

$obj  = new MyClass1();
$obj2 = new MyClass2(); 


//complete example
require 'vendor/autoload.php'; 
require 'functions/general.php'; 
require 'include/mailgun.php';

function autoLoader ($class) 
{ 
	if (file_exists(__DIR__.'/classes/'.$class.'.php')) { 
		require __DIR__.'/classes/'.$class.'.php'; 
	} 
} 
spl_autoload_register('autoLoader');
