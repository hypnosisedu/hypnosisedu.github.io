angular.module('hea', ['ngRoute']).config(function($routeProvider){
	$routeProvider.when('/conference', {
		templateUrl: 'inc/conference.html',
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
}).controller('heaCtrl', ['$scope', '$routeParams', '$location'
	function heaCtrl($scope, $routeParams, $location) {
		$('.navbar-nav li a').each(function(){
			if($(this).attr('href') == $location.path()){$(this).addClass('active');}else{$(this).removeClass('active');}
		});
		
	}
]);