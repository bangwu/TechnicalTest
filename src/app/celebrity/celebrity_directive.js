(function (angular) {
  'use strict';

  angular.module('celebrity')
    .directive('celebrityDetail', function () {
      return {
        restrict: 'E',
        scope: '=',
        templateUrl: '/celebrity/detail.html'
      };
    })
    .directive('celebritySort', function () {
      return {
        restrict: 'E',
        scope: '=',
        templateUrl: '/celebrity/sort.html'
      };
    });

})(angular);
