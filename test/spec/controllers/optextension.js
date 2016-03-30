'use strict';

describe('Controller: OptextensionCtrl', function () {

  // load the controller's module
  beforeEach(module('immiTrumpApp'));

  var OptextensionCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    OptextensionCtrl = $controller('OptextensionCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(OptextensionCtrl.awesomeThings.length).toBe(3);
  });
});
