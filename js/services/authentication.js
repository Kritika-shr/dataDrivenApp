myApp.factory('Authentication',['$rootScope','$firebaseAuth','$firebaseObject','$location','FIREBASE_URL',
	function($rootScope, $firebaseAuth,$firebaseObject,$location, FIREBASE_URL){
		var ref = new Firebase(FIREBASE_URL);
		var auth = $firebaseAuth(ref);

		  auth.$onAuth(function(authUser) {
		    if (authUser) {
		      var userRef = new Firebase(FIREBASE_URL + 'users/' + authUser.uid );
		      var userObj = $firebaseObject(userRef);
		      $rootScope.currentUser = userObj;
		    } else {
		      $rootScope.currentUser = '';
		    }
		  });
		var myObject = {
			login: function(user){
				//$rootScope.message = "Welcome " + user.email;
				auth.$authWithPassword({
			        email: user.email,
			        password: user.password
			      }).then(function(regUser) {
			        $location.path('/meetings');
			      }).catch(function(error) {
			       $rootScope.message = error.message;
			   });
			},//Login

			logout: function() {
		      return auth.$unauth();
		    }, //logout

		      requireAuth: function() {
			      return auth.$requireAuth();
			    }, //require Authentication

			register: function(user){
				auth.$createUser({
					email: user.email,
					password : user.password
				}).then(function(regUser){
					var regRef = new Firebase(FIREBASE_URL + 'users')
					  .child(regUser.uid).set({
					          date: Firebase.ServerValue.TIMESTAMP,
					          regUser: regUser.uid,
					          firstname: user.firstname,
					          lastname: user.lastname,
					          email:  user.email
				        }); //user info

 
					myObject.login(user)
				}).catch(function(error){
					$rootScope.message = error.message;
				});//Create User		
			  }//Register
			};//Return
			return myObject;
	}]);//factory

//Since we are recieving a variable called user we do not want user variable 