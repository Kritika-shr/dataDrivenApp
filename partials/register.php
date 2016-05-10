<div class="col-md-3"></div>
<div class="col-md-6">
<section>
<h2>Register Here!It's Awesome {{ message }}</h2>
<form name="myform" ng-submit="register()" novalidate>
  <div class="form-group" style="margin-top: 20px;">
    <label for="exampleInputFName">First Name</label>
    <input type="text" class="form-control" name="firstname" value="" placeholder="First Name" ng-model="user.firstname" ng-required="true">
    <div class="error" ng-show="myform.firstname.$invalid && myform.firstname.$touched">You Must fill out your First Name</div>
  </div>
  <div class="form-group" style="margin-top: 20px;">
    <label for="exampleInputLName">Last Name</label>
    <input type="text" class="form-control"  name="lastname" value="" placeholder="Last Name" ng-model="user.lastname" ng-required="true">
    <div class="error" ng-show="myform.lastname.$invalid && myform.lastname.$touched">You Must fill out your Last Name</div>
  
  </div>
  <div class="form-group" style="margin-top: 20px;">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" placeholder="Email" name="email" ng-required="true" ng-model="user.email">
     <div class="error" ng-show="myform.email.$invalid && myform.email.$touched">You Must Enter a valid Email</div>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" placeholder="Password" name="password" ng-model="user.password" ng-minlength="6">
  </div>
    <div class="error" ng-show="myform.password.$invalid && myform.password.$touched">Password must be at least 6 digits</div>
  
   <button type="submit" class="btn btn-default">Submit</button>
</form>
</section>
</div>
<div class="col-md-3"></div>
