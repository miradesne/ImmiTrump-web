'use strict';

/**
 * @ngdoc overview
 * @name immiTrumpApp
 * @description
 * # immiTrumpApp
 *
 * Main module of the application.
 */
angular
  .module('immiTrumpApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl',
        controllerAs: 'contact'
      })
      .when('/blog', {
        templateUrl: 'views/blog.html',
        controller: 'BlogCtrl',
        controllerAs: 'blog'
      })
      .when('/selectProduct', {
        templateUrl: 'views/selectproduct.html',
        controller: 'SelectproductCtrl',
        controllerAs: 'selectProduct'
      })
      .when('/opt', {
        templateUrl: 'views/opt.html',
        controller: 'OptCtrl',
        controllerAs: 'opt'
      })
      .when('/optExtension', {
        templateUrl: 'views/optextension.html',
        controller: 'OptextensionCtrl',
        controllerAs: 'optExtension'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
