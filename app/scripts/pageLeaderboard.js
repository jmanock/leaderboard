var app = angular.module('app', ['firebase']);

app.controller('PlayerCtrl', function($scope, $firebaseObject){
  var ref = new Firebase('https://toga.firebaseio.com');
  $scope.players = $firebaseObject(ref);
});
