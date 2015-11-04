(function (angular) {
  'use strict';

  angular.module('celebrity')
    .constant('customCurrencyConfig', {
      USARate: 1,
      ASURate: 1.3877,
      EuroRate: 0.9132
    })
    .filter('customCurrency', ['customCurrencyConfig',function (customCurrencyConfig) {
      function format(input) {
        return input.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
      }

      return function (input, symbol) {
        if (isNaN(input)) {
          return input;
        } else if (symbol === '$US') {
          return '$USD ' + format(input * customCurrencyConfig.USARate);
        } else if (symbol === '$AU') {
          return '$AUD ' + format(input * customCurrencyConfig.ASURate);
        } else if (symbol === '€') {
          return '€ ' + format(input * customCurrencyConfig.EuroRate);
        } else {
          return '$USD ' + format(input * customCurrencyConfig.USARate);
        }
      };
    }]);

})(angular);
