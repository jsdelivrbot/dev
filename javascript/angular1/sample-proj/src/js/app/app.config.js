'use strict';
//app.config.js exends off of the module

//name the app anything
angular.module('sample')
.config(
	function(
		$locationProvider,
		$routeProvider,
		) {
			//removes the hash when routing
			$locationProvider.html5Mode({
				enabled: true
			});
			$routeProvider.
				when('/', {
					template: '<blog-list></blog-list>'
				}).
				when('/blog/:id', {
					template: '<blog-detail></blog-detail>'
				}).
				otherwise({
					template: 'not found'
				});

});