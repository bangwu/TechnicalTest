(function (angular) {
  'use strict';

  angular.module('celebrity')
    .directive('celebrityDetail', [function () {
      return {
        restrict: 'EA',
        templateUrl: '/celebrity/detail.html'
      };
    }])
    .directive('celebritySort', [function () {
      return {
        restrict: 'EA',
        templateUrl: '/celebrity/sort.html'
      };
    }]);

})(angular);
