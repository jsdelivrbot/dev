'use strict';

angular.module('blogList').
	component('blogList', {
		//quick version:
		//template: '<div></div>'
		templateUrl: '/templates/blog-list.html',
		controller: function(Post, $location, $routeParams, $rootScope, $scope) {
			$scope.goToItem = function(post) {
				$location.path("/blog/" + post.id);
				// $rootScope.$apply(function() {
					
				// });
			}

			$scope.items = Post.query();
		}
	});

// $scope.clickTest = function() {
// 	console.log('clicked');
// };


//if component is directly in html page, do it this way:
// angular.module('blogList').
// controller('BlogListController', function($scope) {
// 	$sope.tile = 'hello';
// })

// <div class="" ng-controller="BlogListController">
// </div>
