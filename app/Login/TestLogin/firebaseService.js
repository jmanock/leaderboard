var app = angular.module('Leaderboard');

app.service('firebaseService', function($firebase){
  var firebaseUrl = 'https://reditclone.firebaseio.com';

  this.getUser = function(userId){
    return $firebase(newFirebase(firebaseUrl + 'Users/' + userId)).$asObject();
  };

  this.getThings = function(userId){
    return $firebase(new Firebase(firebaseUrl + 'Users/' + userId + '/things')).$asArray();
  };
});
