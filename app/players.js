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

  $scope.addMessage = function(){
    $scope.messages.$add({
      name: $scope.newNameTest,
      description: $scope.newDescriptionTest
    });
  };

});
// toga controller
myapp.controller('playerCtrl', function($scope, $firebaseArray){
  var ref = new Firebase('https://toga.firebaseio.com');
  $scope.players = $firebaseArray(ref);

});
