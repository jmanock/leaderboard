// var app = angular.module('leaderboard-clone', ['ngRoute', 'firebase']);
// app.constant('fbURL', 'https://toga.firebaseio.com');
//
// app.factroy('players', function($firebase, fbURL){
//   return $firebase(new Firebase(fbURL)).$asArray();
// });
//
// app.config(function ($routeProvider){
//   $routeProvider.when('/', {
//     controller: 'MainController',
//     templateUrl: 'players.html'
//   }).otherwise({
//     redirectTo:'/'
//   });
// });
//
// app.controller('MainController', function($scope, $firebase, Posts){
//   $scope.players = Posts;
//
//
// });
var myapp = angular.module('myapp', ['firebase']);

// reddit controller
myapp.controller('BookCtrl', function($scope, $firebaseArray){
  var ref = new Firebase('https://reditclone.firebaseio.com');
  //$scope.messages = $firebaseArray(ref);
  $scope.golfers = $firebaseArray(ref);

  ref.createUser({
    email:'',
    password:
  }, function(error, userData){
    if(error){
      console.log("Error creating user:", error);
    }else{
      console.log('Successfully create user acount with uid', userData.uid);
    }
  });
  $scope.addMessage = function(){
    var name = $scope.newNameTest;
    var total = $scope.newDescriptionTest;

          $scope.golfers.$add({
            Name: name,
            Total: total
          });
  };

});
// toga controller
myapp.controller('playerCtrl', function($scope, $firebaseArray){
  var ref = new Firebase('https://toga.firebaseio.com');
  $scope.players = $firebaseArray(ref);

});
