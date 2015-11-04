(function (angular) {
  'use strict';

  angular.module('media.app', ['ngRoute', 'celebrity'])
    .config(['$routeProvider', function ($routeProvider) {
      $routeProvider.when('/', {
        templateUrl: '/celebrity/index.html'
      });
    }]);
})(angular);
