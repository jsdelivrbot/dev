//dynamically compile newly loaded html code - for example if you
//need to load a controller that is in a popup that has been loaded asyncronousely
//this will be called once, and ignored if called again
var $injector = angular.injector(['ng', 'eBase']);

$injector.invoke(function($rootScope, $compile) {
$compile(jQuery('#pnlServiceProviders'))($rootScope);
	});
</script>

