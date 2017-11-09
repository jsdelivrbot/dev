//on hover
jQuery('a').hover(function() {
//'this' is the current object
console.log(this);
},

//onclick
jQuery( "#filter-prod-submit" ).click(function() {
    alert( "clicked" );
});