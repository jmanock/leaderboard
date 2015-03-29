'use strict';
angular.module('Leaderboard')
  // .controller('ProfileCtrl', function($scope, $firebaseArray){
  //   var ref = new Firebase('https://toga.firebaseio.com');
  //   $scope.players = $firebaseArray(ref);
  // })
  // .controller('MainCtrl', function($scope, FirebaseUrl, $firebaseArray){
  //   var golfers = $firebaseArray(FirebaseUrl);
  //   golfers.$add({
  //
  //   });
  // });
.controller('SearchCtrl', function($scope, $firebaseArray, FirebaseUrl, Auth, $stateParams){
  var self = this;
  var ref = new Firebase('https://toga.firebaseio.com');
  this.players = $firebaseArray(ref);
  this.currentUser = $firebaseArray(FirebaseUrl.child('users').child($stateParams.id));
  Auth.onAuth(function(user){
    self.user = user;
  });
  console.log($stateParams);
  this.addPlayer = function(player){
    var userTeam = FirebaseUrl.child('userTeam').child(self.user.uid).child('team').child(player.$id);
    userTeam.update({
      name: player.Name
    });

    // How to get the name or id when clicked
    //console.log(player.$id);
  };
});
