/* ==========================================================================
// passing dynamic string
========================================================================== */

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

//to change value of dropdown select from code:
//*note that you have to use the original array passed in then the desired index, can't just indicate a value on int's own

<select data-ng-options="o.name for o in options" data-ng-model="selectedOption"></select>

$scope.options = [{ name: "a", id: 1 }, { name: "b", id: 2 }];
$scope.selectedOption = $scope.options[1];

//note that you can specify a default option to select via html:
<select name="selUser" id="selUser" ng-model="chosenUser" ng-options="u.id as u.first_name+' '+u.last_name for u in users track by u.id">
	<option value="">- Choose -</option>
</select>