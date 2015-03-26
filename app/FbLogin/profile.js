'use strict';
angular.module('Leaderboard')
  .controller('ProfileCtrl',function($scope, $firebaseObject){
    var ref = new Firebase('https://toga.firebaseio.com');
    var syncObject = $firebaseObject(ref);
    syncObject.$bindTo($scope, 'profile.players');

  });
