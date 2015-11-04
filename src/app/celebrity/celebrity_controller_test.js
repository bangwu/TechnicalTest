/**
 * Created by bwu on 11/4/15.
 */
describe('CelebrityListController', function () {
  var celebrityListController, scope, $httpBackend;

  beforeEach(module('celebrity'));

  beforeEach(inject(function ($injector, _$httpBackend_) {
    scope = $injector.get('$rootScope');
    $httpBackend = _$httpBackend_;
    celebrityListController = function () {
      return $injector.get('$controller')('CelebrityListController', {'$scope': scope});
    };
  }));

  it('should load the celebrity rich list', function () {
    celebrityListController();
    $httpBackend.when('GET', '/celebrityRichList.json').respond({'pageTitleH1': 'pageTitleH1'});
    scope.init();
    $httpBackend.flush();

    scope.celebrityRichList.pageTitleH1.should.equal('pageTitleH1');
  });
});
