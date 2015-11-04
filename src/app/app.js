
angular.module('mediaApp', ['ngRoute', 'celebrity'])
  .config(function($routeProvider){
    'use strict';
    $routeProvider.when('/', {
      templateUrl: '/celebrity/index.html'
    });
  });
