(function (angular) {
  'use strict';

  angular.module('celebrity')
    .constant('customCurrencyConfig', {
      '$US': {
        'symbol': '$USD',
        'rate': 1
      },
      '$AU': {
        'symbol': '$AUD',
        'rate': 1.3877
      },
      '€': {
        'symbol': '€',
        'rate': 0.9132
      }
    })
    .filter('customCurrency', ['customCurrencyConfig', function (customCurrencyConfig) {
      function format(input, currency) {
        return currency.symbol + ' ' + (input * currency.rate).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
      }

      return function (input, symbol) {
        if (isNaN(input)) {
          return input;
        }
        symbol = symbol || '$US';
        return format(input, customCurrencyConfig[symbol]);
      };
    }]);

})(angular);
