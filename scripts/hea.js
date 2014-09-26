angular.module('hea', ['ngRoute']).config(function($routeProvider){
	$routeProvider.when('/conference', {
		templateUrl: 'inc/conf.html',
	}).when('/registration', {
		templateUrl: 'inc/reg.html',
	}).when('/articles', {
		templateUrl: 'inc/articles.html',
	}).when('/join', {
		templateUrl: 'inc/join.html',
	}).when('/photos', {
		templateUrl: 'inc/photos.html',
	}).when('/contact', {
		templateUrl: 'inc/contact.html',
	}).otherwise('/', {
		templateUrl: 'inc/home.html',
	});
}).controller('heaCtrl', ['$scope', '$routeParams', 
	function heaCtrl($scope, $routeParams) {
		
	}
]);