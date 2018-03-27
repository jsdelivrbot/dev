'use strict';

angular.module('blogDetail').
	component('blogDetail', {
		//quick version:
		//template: '<div></div>'
		templateUrl: '/templates/blog-detail.html',
		controller: function(Post, $http, $location, $routeParams, $scope) {
			Post.query(function(data) {
				$scope.nofFound = true;
				angular.forEach(data, function(post) {	
					if (post.id == $routeParams.id) {
						$scope.notFount = false;
						$scope.post = post;
						resetReply();
					}
				});
			});

			$scope.deleteComment = function(comment) {
				// use apply to make sure the context of scope is within
				// this component since this is being called from the directive
				$scope.$apply($scope.post.comments.splice(comment, 1));
			}

			$scope.addReply = function() {
				console.log($scope.reply);
				$scope.post.comments.push($scope.reply);
				resetReply();
			}

			function resetReply() {
				$scope.reply = {
					id: $scope.post.comments.length + 1,
					text: ""
				}
			}

			if($scope.notFound) {
				console.log('not found');
				$location.path("/");
			}

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
