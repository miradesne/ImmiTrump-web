'use strict';

describe('Controller: SelectproductCtrl', function () {

  // load the controller's module
  beforeEach(module('immiTrumpApp'));

  var SelectproductCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SelectproductCtrl = $controller('SelectproductCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(SelectproductCtrl.awesomeThings.length).toBe(3);
  });
});
