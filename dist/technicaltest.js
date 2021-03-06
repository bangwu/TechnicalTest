angular.module('celebrity', []);

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

(function (angular) {
  'use strict';

  angular.module('media.app', ['ngRoute', 'celebrity'])
    .config(['$routeProvider', function ($routeProvider) {
      $routeProvider.when('/', {
        templateUrl: '/celebrity/index.html'
      });
    }]);
})(angular);

(function(module) {
try {
  module = angular.module('technicaltest');
} catch (e) {
  module = angular.module('technicaltest', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('/technicaltest/celebrity/detail.html',
    '<div class="celebrity"><div class="no">No:{{celebrity.rank}}</div><div class="name">Name:{{celebrity.name}}</div><div class="net-worth">Net Worth:{{celebrity.netWorth | customCurrency: currency}}</div><div class="age">Age:{{celebrity.age}}</div><div class="country">Country of Birth:{{celebrity.country}}</div></div>');
}]);
})();

(function(module) {
try {
  module = angular.module('technicaltest');
} catch (e) {
  module = angular.module('technicaltest', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('/technicaltest/celebrity/index.html',
    '<div class="celebrity-list col-md-8 col-md-offset-2"><div class="sort col-md-10 col-md-offset-1"><celebrity-sort></celebrity-sort></div><div class="details col-md-10 col-md-offset-1"><celebrity-detail ng-repeat="celebrity in celebrityRichList.celebrityList | filter: {country: country}| filter: search| orderBy: orderType"></celebrity-detail></div></div>');
}]);
})();

(function(module) {
try {
  module = angular.module('technicaltest');
} catch (e) {
  module = angular.module('technicaltest', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('/technicaltest/celebrity/sort.html',
    '<div><div class="sort-group col-md-6"><div class="label">Birthplace:</div><div class="sort-input"><select ng-model="country" class="form-control" ng-options="country.value as country.key for country in birthPlace " ng-init="country = birthPlace[0].value"></select></div></div><div class="sort-group col-md-6"><div class="label">Currency Convert:</div><div class="sort-input"><select ng-model="currency" class="form-control" ng-options="type.value as type.key for type in currencyType" ng-init="currency = currencyType[0].value"></select></div></div><div class="sort-group col-md-6"><div class="label">Search:</div><div class="sort-input"><input class="form-control" ng-model="search"></div></div><div class="sort-group col-md-6"><div class="label">Order By:</div><div class="sort-input"><select ng-model="orderType" class="form-control" ng-options="type.value as type.key for type in orderTypes" ng-init="orderType = orderTypes[0].value"></select></div></div></div>');
}]);
})();
