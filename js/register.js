myApp.controller('RegisterController',['$scope','Authentication',
function($scope,Authentication){
	
	$scope.login = function(){
		console.log("Inside login function");
		Authentication.login($scope.user);
	}; //Login

	 $scope.logout = function() {
	    Authentication.logout();
	  }; //logout

	$scope.register = function(){
		Authentication.register($scope.user);
	};//Register

}]);//Controller






