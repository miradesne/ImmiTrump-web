'use strict';

describe('Controller: OptCtrl', function () {

  // load the controller's module
  beforeEach(module('immiTrumpApp'));

  var OptCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    OptCtrl = $controller('OptCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(OptCtrl.awesomeThings.length).toBe(3);
  });
});
