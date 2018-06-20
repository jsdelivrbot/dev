/* ==========================================================================
// directive example
========================================================================== */

//directives
app.directive('confirmClick', function($rootScope, $location) {
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

/* ==========================================================================
// ng-cloak
========================================================================== */

//put this on an element to prevent it from rendering until angular is loaded
//(prevent flash/thrashing)
ng-cloak

/* ==========================================================================
// ng-include
========================================================================== */

//ng include (another example)
<div ng-include="'/filepath/list.html'"></div>

/* ==========================================================================
// ng-bind-html
========================================================================== */

<tr ng-repeat="a in assets">
	<td ng-bind-html="a.equipment_no"></td>
	<td ng-bind-html="a.category_code + ' ' + a.category"></td>
	<td ng-bind-html="a.type"></td>
	<td ng-bind-html="a.area"></td>
	<td ng-bind-html="a.room_no || '00 All Rooms'"></td>
	<td><a href="#" ng-click="removeAsset($index)"><img src="/static/images/icons/cross.png" title="Remove asset" /></a></td>
</tr>