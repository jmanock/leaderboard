var app = angular.module('app', ['firebase']);

app.controller('MainCtrl', function($scope, $firebaseArray){
  var ref = new Firebase('https://reditclone.firebaseio.com');
  $scope.golfers = $firebaseArray(ref);
});

app.controller('PlayerCtrl', function($scope, $firebaseArray){
  var ref = new Firebase('https://toga.firebaseio.com');
  $scope.players = $firebaseArray(ref);
});
