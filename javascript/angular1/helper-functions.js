angular:
/* ==========================================================================
// helper functions
========================================================================== */

//foreach loop
angular.forEach(myArray, function(item) {
	//...
});

//find an element in angular
var el = angular.element('[data-item-id]')

//get it's data attr
el.data("post-url");

//include external html in view
ng-include="'/templates/template1.html'"

//passing a dynamic string to an angular function
'<input type="button" onClick="onBtnClick(\'' + myVal.name + '\')" />'


/* ==========================================================================
// dropdown select
========================================================================== */

// <div ng-app="myApp" ng-controller="myCtrl">
// <select ng-model="selectedname" ng-options="item for item in names" ng-change="onChange()">
// </select>
// </div>

var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
    $scope.names = ["Emil", "Tobias", "Linus"];
    
    $scope.onChange = function() {
         console.log($scope.selectedname);
    }
});