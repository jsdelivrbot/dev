'use strict';

angular.module('confirmClick').
	directive('confirmClick', function($rootScope, $location) {
		return {
			restrict: "A",
			link: function(scope, element, attr) {
				var msg = scope.message || 'are you sure?';
				var clickAction = attr.confirmedClick;
				element.bind('click', function(event) {
					event.preventDefault();
					event.stopImmediatePropagation();

					if(window.confirm(msg)) {
						$rootScope.$apply(function() {
							scope.$eval(clickAction);
						});
					};
				});
			}
		}
	});


	// angular.module('confirmClick').
	// 	directive('confirmClick', function($rootScope, $location) {
	// 		return {
	// 			//= is for the attr value
	// 			//@ is for the evaluated text attr value
	// 			//we need to add it to "scope" to get the atual value 
	// 			//if it's evaluated by angular
	// 			scope: {
	// 				message: "@message",
	// 				post: "=post"
	// 			},
	// 			restrict: 'E',
	// 			template: '<a ng-href="#">{{post.title}}</a>',
	// 			link: function(scope, element, attr) {
	// 				var msg = scope.message || 'are you sure?';
	// 				element.bind('click', function(event) {
	// 					if(window.confirm(msg)) {
	// 						$rootScope.$apply(function() {
	// 							$location.path('/blog/' + scope.post.id);
	// 						});
	// 					};
	// 				});
	// 				console.log('scope.post: ', scope.post);
	// 				// console.log('element: ', element);
	// 				// console.log(attr.confirmClick);
	// 				console.log(attr.post);
	// 				// console.log(attr.href);
	// 			}
	// 		}
	// 	});