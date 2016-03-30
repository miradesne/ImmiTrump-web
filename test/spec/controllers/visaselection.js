'use strict';

describe('Controller: VisaselectionCtrl', function () {

  // load the controller's module
  beforeEach(module('immiTrumpApp'));

  var VisaselectionCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    VisaselectionCtrl = $controller('VisaselectionCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(VisaselectionCtrl.awesomeThings.length).toBe(3);
  });
});
