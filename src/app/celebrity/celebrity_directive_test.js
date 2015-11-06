(function () {
  'use strict';

  describe('celebrityDetail', function () {
    var $compile, $scope, $httpBackend;
    beforeEach(module('celebrity'));

    beforeEach(inject(function (_$compile_, $rootScope, _$httpBackend_) {
      $compile = _$compile_;
      $scope = $rootScope.$new();
      $httpBackend = _$httpBackend_;
    }));

    it('should contain div element', function () {
      $httpBackend.when('GET', '/celebrity/detail.html').respond('<div>No</div>');
      var element = $compile('<celebrity-detail></celebrity-detail>')($scope);
      $httpBackend.flush();
      $scope.$apply();

      element.html().should.equal('<div>No</div>');
    });
  });

  describe('celebritySort', function () {
    var $compile, $scope, $httpBackend;
    beforeEach(module('celebrity'));

    beforeEach(inject(function (_$compile_, $rootScope, _$httpBackend_) {
      $compile = _$compile_;
      $scope = $rootScope.$new();
      $httpBackend = _$httpBackend_;
    }));

    it('should contain div element', function () {
      $httpBackend.when('GET', '/celebrity/sort.html').respond('<div>Sort</div>');
      var element = $compile('<celebrity-sort></celebrity-sort>')($scope);
      $httpBackend.flush();
      $scope.$apply();

      element.html().should.equal('<div>Sort</div>');
    });
  });

})();
