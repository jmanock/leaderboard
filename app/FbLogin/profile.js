'use strict';
angular.module('Leaderboard')
  .controller('ProfileCtrl', function($scope, $firebaseArray){
    var ref = new Firebase('https://toga.firebaseio.com');
    $scope.players = $firebaseArray(ref);
  })
  .controller('MainCtrl', function($scope, FirebaseUrl, $firebaseArray){
    $scope.golfers = $firebaseArray(FirebaseUrl);
  });
