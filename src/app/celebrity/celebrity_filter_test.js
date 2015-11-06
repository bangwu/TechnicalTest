'use strict';

describe('customCurrency', function () {
  var customerCurrency;

  beforeEach(module('celebrity'));

  beforeEach(inject(function ($filter) {
    customerCurrency = $filter('customCurrency');
  }));

  it('should return aaa if give aaa', function () {
    customerCurrency('aaa').should.equal('aaa');
  });

  it('should return usa dollar', function () {
    customerCurrency(123).should.equal('$USD 123');
  });

  it('should return asu dollar', function () {
    customerCurrency(123, '$AU').should.equal('$AUD 170.6,871');
  });

  it('should return eua dollar', function () {
    customerCurrency(123, '€').should.equal('€ 112.3,236');
  });

});
