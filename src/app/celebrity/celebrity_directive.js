/**
 * Created by bwu on 11/4/15.
 */
angular.module('celebrity')
  .directive('celebrityDetail',function(){
    'use strict';
    return {
      restrict: 'E',
      scope: '=',
      templateUrl: '/celebrity/detail.html'
    };
  });
