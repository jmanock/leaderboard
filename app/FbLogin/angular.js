'use strict';
var ref = new Firebase('https://reditclone.firebaseio.com');
angular.module('something',[])
.controller('MainCtrl', ['$scope', function($scope){
  $scope.facebook = function(){
    ref.authWithOAuthPopup('facebook', function(error, authData){
      var usersRef = ref.child('users').child(authData.uid);
      if(error){
        console.log('Something went wrong!', error);
      }else{
        console.log(authData);
      usersRef.set({
        facebook: authData.facebook,
        fullname: authData.facebook.displayName,
        avaturUrl: authData.facebook.cachedUserProfile.picture.data.url
      });
      }
    });
  };
}]);
