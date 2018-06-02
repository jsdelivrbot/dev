/* ==========================================================================
// foreach
========================================================================== */

//foreach loop
angular.forEach(myArray, function(item) {
	//...
});

/* ==========================================================================
// clone
========================================================================== */

//creates a deep clone
var myCopy = angular.copy(myOriginal);

/* ==========================================================================
// angular.element
========================================================================== */

// access an element from the dom for manipulation (internally uses jQuery light)
angular.element('#selTemplate, #selFacility').on('change', function() {
	$timeout(onChange);
});

var el = angular.element('[data-item-id]')
//get it's data attr
el.data("post-url");

/* ==========================================================================
// $element
========================================================================== */

//used to have access to the dom through the controller
$element
//usage:
$element.find('[data-discussion-target]')
//event handler using element (can do this if need an element you can't use ng-click on)
$element.on('click', '#service-provider', function() {
	//access the clicked element:
	console.log(angular.element(this));
});

/* ==========================================================================
// eval, apply
========================================================================== */

$scope.$eval
$scope.$apply();

/* ==========================================================================
// $attrs
========================================================================== */

//$attrs
//in the controller html:
//data-module-url="my-value"
//in the controller access it by:
$attrs.moduleUrl;




