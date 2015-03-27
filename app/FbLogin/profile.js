'use strict';
angular.module('Leaderboard')
  .controller('ProfileCtrl',function($scope, FirebaseUrl, $http){
        $http.get('https://toga.firebaseio.com/.json')
        .success(function(data){
          angular.forEach(data, function(value, key){
            $scope.players = value.Name;
          });
        });

});
