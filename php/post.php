<?php
/* ==========================================================================
post example
========================================================================== */

$myPostVar = $_POST['myKey'];

echo htmlspecialchars($myPostVar['subKey']);
?>

<!--  ==========================================================================
basic form example
==========================================================================  -->


<form action="submit.php" method="post">
   <input type="text" name="customerName" value="Enter your name here" />
   <input type="submit" name="submit_button" value="Submit" />
</form>

<?php
print_r($_POST);
// Array ( [customerName] => Neil [submit_button] => Press to Submit )
?>

<!--  ==========================================================================
checkbox example
==========================================================================  -->

<form action="subscribe.php" method="post">
<input type="checkbox" name="sendNews" checked /><br>
<input type="submit" name="submit_button" value="Submit" />
</form>

<?php

if (array_key_exists ('sendNews', $_POST)) {
    echo "requested newsletter<br>";
} else {
    echo "declined newsletter<br>";
}

?>

<!--  ==========================================================================
multiselect example
==========================================================================  -->

<form action="submit.php" method="post">
	<select name="carBrands" size=5 multiple>
	<option value="Ford" SELECTED>Ford Motor Company
	<option value="GM">General Motors
	<option value="Honda">Honda Motor Company
	<ottion value="Toyota">Toyota Motor Company
	<option value="Ford">Jaguar
	<option value="Mazda">Mazda
	<option value="Volvo">Volvo
	</select>
</form>

<?php

print_r($_POST['carBrands']);
// Array ( [0] => Ford [1] => GM )
?>

<!--  ==========================================================================
post to an iframe
==========================================================================  -->

<!-- Post to a page then have it’s repose print to an iframe: can use this in mvc to extract some data from inner html of the iframe -->
<form action="do_stuff.php" method="post" target="my_iframe"> <input type="submit" value="Do Stuff!" /> </form> 
<!-- when the form is submitted, the server response will appear in this iframe -->
<iframe name="my_iframe"></iframe>

