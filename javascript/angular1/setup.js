(function() {

  /* ==========================================================================
  init
  ========================================================================== */

  //sandbox
  var myApp = {};

  //declare the module
  myApp.app = angular.module('appName', [
    // resources
  ]);

  //prevent angular from loading twice
  window.addEvent('domready', function() {
    angular.bootstrap(document, ['appName']);
  });

  //config
  myApp.app.config(
    function() {
      //config options here
  });

  //run
  myApp.app.run([
    //options
    function() {
      //executes on application start

      //recompile angular if needed for dynamic html
      myApp.AngularCompile = function(elName) {
        var $injector = angular.injector(['ng', 'appName']);
        $injector.invoke(function($rootScope, $compile) {
          //ex: #pnlServiceProviders
         $compile(jQuery(elName))($rootScope);
        });
      }
  }]);

})();

/* ==========================================================================
wrapper for controllers, services, factories, etc.
========================================================================== */

(function(app, sb) {

})(myApp.app, myApp.sandbox);