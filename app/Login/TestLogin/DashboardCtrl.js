var app = angular.module('Leaderboard');

app.controller('DashboardCtrl', function($scope, userReference, thingsReference){

  $scope.profile = userReference;
  $scope.things = thingsReference;
  $scope.addTing = function(){
    $scope.things.$add($scope.thing);
  };
  $scope.removeThing = function(thing){
    $scope.things.$remove(thing);
  };
  $scope.update = function(){
    $scope.profile.$save();
  };
});
