var myApp = angular.module('myApp',
	['ngRoute','firebase'])
	.constant('FIREBASE_URL', 'https://datadrivenapp90.firebaseio.com/');

 myApp.run(['$rootScope', '$location',
  function($rootScope, $location) {
  	console.log("Inside run method");
    $rootScope.$on('$routeChangeError',
      function(event, next, previous, error) {
        if (error=='AUTH_REQUIRED') {
          $rootScope.message = 'Sorry, you must log in to access that page';
          $location.path('/login');
        } // AUTH REQUIRED
      }); //event info
  }]); //run


myApp.config(['$routeProvider', function($routeProvider){
	$routeProvider.
	when('/login',{
		templateUrl : 'partials/login.html',
		controller:'RegisterController'
	}).
	when(
		'/register',{
			templateUrl:'partials/register.php',
			controller:'RegisterController'
	}).
	when(
		'/meetings',{
		templateUrl:'partials/meetings.html',
		controller:'MeetingsController',
		resolve: {
        currentAuth: function(Authentication) {
          return Authentication.requireAuth();
        } //current Auth
      } //resolve

	}).
	when(
		'/checkins/:uId/:mId', {
			templateUrl:'partials/checkins.html',
			controller:'CheckinsController'
		}).
	when(
		'/checkins/:uId/:mId/checkinsList', {
			templateUrl:'partials/checkinslist.html',
			controller:'CheckinsController'
		}).
	otherwise({
		redirectTo:'/login'  
	});
}]);
