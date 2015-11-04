/**
 * Created by bwu on 11/4/15.
 */
angular.module('celebrity')
  .controller('CelebrityListController',function($scope, $http){
    'use strict';
    $scope.init = function(){
      $http.get('/celebrityRichList.json').success(function(data){
        $scope.celebrityRichList = data;
      });
    };
  });
