// jQuery module pattern
//--------------------------

//Our app namespace. We pass in the jQuery object to shorten lookups
  var myApp = function ( $ ) {
    // private variables and methods, only available within this myApp
    var message = "not directly accessible from outside the module";
    function multiplier ( x,y ) {
      return x * y            
    };
  //the return object contains the public 
  //properties and public methods 
    return  {
      init : function(){
         //intialize the app
      },
      prop : "42",
      specialNumber : function () {
        //access to our private method
        var num = multiplier( 7 , 6 );
        return "Our special number is definitely " + num;
      },
      //we provide controlled access to private variables
      shareMessage : function( arg ){
        if ( arg === "open sesame" ) {
          return message + ",unless you know the magic word";
        } else {
          throw new Error( "You need to know the magic word" );

        }
      }
    };
  }( jQuery );
  
  myApp.dashboard = function ( $ ) {
	  // private variables and methods
	  var config = {
	    "color" : "blue",
	    "title" : "my dashboard",
	    "width" : "960px"
	  };
	  return  {
	    init : function(){
	      //intialize the dashboard
	    },
	//updateConfig allows for monitored configuration 
	//of the private config object
	    updateConfig : function( obj ) {
	      
	if ($.inArray(obj.color, ["red", "blue", "green", "purple"] !== -1))
	{
         config.color = obj.color;
	      }
	     config.title = obj.title || config.title;
	     config.width = obj.width || config.width;
	       
	    },
	    render : function() {
	      //renders the dashboard
	      var $dashboard = $( "<div/>" ).html( "<h1/>" )
	     $dashboard.text( config.title )
	       .css( 
	         { "width" : config.width,
	           "color" : config.color } 
	       );
	       $( "#main" ).append( $dashboard );
	    }
	  };
	}( jQuery );

  console.log( myApp.message )
  
  //console.log( myApp.multiplier() )
 
  //console.log( myApp.shareMessage( "please?" ) )
  
  console.log( myApp.shareMessage( "open sesame" ) )

  console.log( myApp.prop );
  
  console.log( myApp.specialNumber() );
  
  
 //dashboard module
 //
 //cannot call this because of the private config function model set up
 //console.log( myApp.dashboard.updateConfig({colour: 'red'}));
 //
 //render the dashboard
 console.log( myApp.dashboard.render());



//--------------------------


//latest jquery
<script type="text/javascript" src="http://code.jquery.com/jquery.min.js"></script>

    //alert an object in jquery (q is the object)
    arr = [];
    $.each(q, function(index, value) {
        arr.push(index + ': ' + value);
    });
    alert(JSON.stringify(arr));

alert(JSON.stringify(YOUR_OBJECT));


//for print testing objects
//alert(JSON.skillsify(YOUR_OBJECT_HERE, null, 4));
////or
//alert(JSON.skillsify(YOUR_OBJECT_HERE));

//change image src on load
 $(document).ready(function() {
        
        
        $('img').attr('src', 'images/socialicons/Facebook.png').load(function(){
            this.width;   // Note: $(this).width() will not work for in memory images
            //...
        });    
        
    });



$(document).ready(function() {
// Handler for .ready() called.
});

// use to test jquery functions by appending words to elements
jQuery('#menu-custom-secondary-menu  li a').hover(function() {
    jQuery(this).append('on');
},
function() {
    jQuery(this).append('off');

});

//get the id of the current element
$('#test').attr('id');


//two ways of selecting in jquery
jQuery(".widget_video iframe").fadeIn();
//or
$(".widget_video iframe").fadeIn();

//fadein
$('.loading-container').fadeIn();


//fadein using opacity to keep the dom flow (milliseconds, opacity)
$('.loading-container').fadeTo(500, 1);
$('.loading-container').fadeTo(500, 0.5);
//fadeto callback example
$( "#book" ).fadeTo( "slow" , 0.5, function() {
// Animation complete.
});
//or for immediate results
jQuery('#main').css('opacity', '0.6');


//javascript - check if page is a certain one
if(window.location.href == 'http://example.com/foo') {
    doAnimation();
}

//check window size
 $(window).resize(function() {
  if ($(window).width() < 960) {
     alert('Less than 960');
  }
 else {
    alert('More than 960');
 }
});

//onclick
jQuery( "#filter-prod-submit" ).click(function() {
    alert( "clicked" );
});

//get the parent
$( "li.item-a" ).parent();
$( "li.item-a" ).parent("selector");
//get the parent (travels more than one level up the dom)
$( "li.item-a" ).parents(".selector");


//fill html into an element
$( "div" ).html( "<span class='red'>Hello <b>Again</b></span>" );
//get html from an element
var html = $( "div" ).html();


//fill value of input
$('input#contrib_order').attr('value' , 'newvalue');

//display javascript alert using php
do_alert("You must enter a 'Listing ID'");
//<?php //helper function for alert messages
//    function do_alert($msg) 
//    {
//        echo '<script type="text/javascript">alert("' . $msg . '"); </script>';
//    }
//?>

//track mouse position (height in this example)
//for testing
$( document ).on( "mousemove", function( event ) {
    $( ".testpagey" ).show();
    $( ".testpagey" ).text( "pagey: " + event.pageY );
});
//put this in the html
//<div class="testpagey" style="display: none; background: #000;">&nbsp;<!--keep this to make the height work for testing--></div>


//persist data in dom element data
//use like this: <div data-current=off ></div>
//set to off
$('#yourelement').data('current', 'off');
//set to on
$('#yourelement').data('current', 'on');
//check if set on or off
if($('#yourelement').data('current') === 'on'){
    //do something
}

//check if element is hovered on
if($('div:hover').length > 0){
    //do something
}


//a function literal that is executed immediately passing int the jQuery object within the scope of the function
(function ($) { $(document).ready(function() { 
        //do something...
    
    });
})(jQuery);


jQuery(function ($) {
/* You can safely use $ in this code block to reference jQuery */
});

//check if a value is in an array
$.inArray( "Pete", myarray )
//will return '0' if found -1 if not found
if($.inArray( "Pete", myarray ) == 0)
{
 //do something
}

//remove a value from an array.
var a = ['a','b','c','d']
a.splice(a.indexOf('c'),1);

//a
//["a", "b", "d"]

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

//alter the css of an element
//get the css:
var color = $( this ).css( "background-color" );
// change the css:
$( this ).css( "width", "+=200" );
or
$( this ).css( "width", "200px" );

//if element exists...
if ($('#elemId').length){
    //do something...
}

//select the child
$( "div" ).children( ".selected" ).css( "color", "blue" );

//remove class
navigation_links.removeClass("selected");

//add class
active_link.addClass("selected");

//get the css
var color = $( this ).css( "background-color" );
//set the css
$( this ).css( "color", "green" )


//use this to loop through/itterate through a javascript object instead of jquery .each for speed
    for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
//    alert(key + " -> " + obj[key]);
            str += "<h3>" + key + "</h3>";
            //loop through children
            for (var key in obj[key]) {
                    str += key + ": " + obj[key][0] + "</br>";
            }
            str+= "</br>";
        }
    }
    
//prototypes in javascript (example to display message "foobar")
debug = new DebugInfo("foo");
var message = debug.displayMessage("bar");
alert(message);

function DebugInfo(message) {
    this.message = message;
}

DebugInfo.prototype.displayMessage = function(addition) {
    str = '';
    str += this.message + addition;
    return str;
    
}