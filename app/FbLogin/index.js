'use strict';
angular.module('Leaderboard', ['ui.router', 'firebase'])
.constant('CONFIG', {
  Firebase:{
    baseUrl: 'https://reditclone.firebaseio.com/'
  }
})
.config(function($stateProvider, $urlRouterProvider){
  $stateProvider
  .state('home',{
    url: '/',
    templateUrl: 'angular.html',
    controller: 'MainCtrl'
  })
  .state('profile',{
    url: '/profile',
    templateUrl: 'profile.html',
    controller: 'ProfileCtrl'
  });
  $urlRouterProvider.otherwise('/');
});
