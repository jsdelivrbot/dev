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
