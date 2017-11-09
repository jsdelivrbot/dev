//.each - A generic iterator function, which can be used to seamlessly 
//iterate over both objects and arrays. Arrays and array-like objects with a length property
arr = [ 52, 97 ];
$.each(arr, function(index, value) {
    //do something
});


//check if a value is in an array
$.inArray( "Pete", myarray )
//will return '0' if found -1 if not found
if($.inArray( "Pete", myarray ) == 0)
{
 //do something
}