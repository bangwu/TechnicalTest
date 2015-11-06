describe('CelebrityListController', function () {
  'use strict';

  var celebrityListController, scope, $httpBackend;

  beforeEach(module('celebrity'));

  beforeEach(inject(function ($injector, _$httpBackend_, $rootScope, $controller) {
    scope = $rootScope.$new();
    $httpBackend = _$httpBackend_;
    celebrityListController = $controller('CelebrityListController', {'$scope': scope});
  }));

  it('should load the celebrity rich list', function () {
    $httpBackend.when('GET', '/celebrityRichList.json').respond({
      'pageTitleH1': 'Technical Test',
      'celebrityList': [
        {
          'rank': 1,
          'name': 'John Walton',
          'netWorth': 21000000000,
          'age': '68',
          'country': 'United States'
        },
        {
          'rank': 2,
          'name': 'Rupert Murdoch',
          'netWorth': 14000000000,
          'age': '84',
          'country': 'Australia'
        }]
    });
    $httpBackend.flush();

    scope.celebrityRichList.pageTitleH1.should.equal('Technical Test');
  });
});
