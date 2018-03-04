'use strict';
//app.module.js declares the module

//name the app anything
angular.module('sample',[
	// external
	'ngResource',
	'ngRoute',
	// internal
	'post',
	'blogList',
	'blogDetail',
]);