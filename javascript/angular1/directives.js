/* ==========================================================================
// directives
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