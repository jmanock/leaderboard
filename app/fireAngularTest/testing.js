var app = angular.module('angNewsApp', ['ngAnimate', 'ngCookies', 'ngResources', 'ngRoute', 'ngSanitize', 'ngTouch'])
.config(function($routeProvider){
  $routeProvider
  .when('/',{
    templateUrl:'posts.html',
    controller: 'PostsCtrl'
  });
});
