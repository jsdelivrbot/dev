//get or set the attribute of an element
var title = $( "em" ).attr( "title" );

//enable jquery to properly update input values for form sumbmission.
//.val() may not work.
$("#amount2").attr('value', 'new value');

//check if a checkbox is checked  
// First method - Recommended
$('#checkbox').prop('checked')  // Boolean true

// Second method - Makes code more readable (e.g. in if statements)
$('#checkbox').is(':checked')  // Boolean true

// Third method - Selecting the checkbox & filtering by :checked selector
$('#checkbox:checked').length  // Integer >0
$('#checkbox:checked').size()  // .size() can be used instead of .length

//if element exists...
if ($('#elemId').length){
    //do something...
}

//get the parent
$( "li.item-a" ).parent();
$( "li.item-a" ).parent("selector");
//get the parent (travels more than one level up the dom)
$( "li.item-a" ).parents(".selector");

//select the child
var children = $( "div" ).children( ".selected" );