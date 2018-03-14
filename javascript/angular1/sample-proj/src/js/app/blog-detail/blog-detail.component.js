'use strict';

angular.module('blogDetail').
	component('blogDetail', {
		//quick version:
		//template: '<div></div>'
		templateUrl: '/templates/blog-detail.html',
		controller: function(Post, $http, $location, $routeParams, $scope) {
			Post.query(function(data) {
				angular.forEach(data, function(post) {	
					if (post.id == $routeParams.id) {
						$scope.post = post;
					}
				});
			});

			// using http method
			// //can also do post
			// //$http.post('...', {}).then(successCallback, errorCallback);
			// $http.get('/json/posts.json').then(successCallback, errorCallback);
			// function successCallback(response, status, config, statusText) {
			// 	var blogItems = response.data;
			// 	angular.forEach(blogItems, function(blog) {	
			// 		if (blog.id == $routeParams.id) {
			// 			$scope.post = blog;
			// 		}
			// 	});
			// }
			// function errorCallback(response, status, config, statusText) {
			// 	console.log(response);
			// }

			//change location (back to home)
			//$location.path('/');
		}
	});
