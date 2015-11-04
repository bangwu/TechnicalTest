(function (angular) {
  'use strict';

  angular.module('celebrity')
    .controller('CelebrityListController', ['$scope', '$http', function ($scope, $http) {
      $scope.currencyType = [
        {key: 'US Dollar', value: '$US'},
        {key: 'Euro', value: '€'},
        {key: 'Australian Dollar', value: '$AU'}
      ];

      $scope.orderTypes = [
        {key: 'rank', value: 'rank'},
        {key: 'name', value: 'name'},
        {key: 'age', value: 'age'}
      ];

      setup();

      function setup() {
        $http.get('/celebrityRichList.json').success(function (data) {
          $scope.celebrityRichList = data;
          loadBirthPlace();
        });
      }

      function loadBirthPlace() {
        $scope.birthPlace = _.uniq($scope.celebrityRichList.celebrityList.map(function (celebrity) {
          return celebrity.country;
        })).map(function (item) {
          return {key: item, value: item};
        }).reverse();
        $scope.birthPlace.push({key: 'Show All', value: ''});
        $scope.birthPlace.reverse();
      }
    }]);

})(angular);
