'use strict';

/**
 * @ngdoc function
 * @name immiTrumpApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the immiTrumpApp
 */
angular.module('immiTrumpApp')
  .controller('MainCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  })
  .controller('marketing-control', function () {
    this.marketingRows = [{
      title: "Why choose ImmiTrump?",
      description: "ImmiTrump can save your time and money! No more headache filling out the forms!"
    },
    {
      title: "How does it work?",
      description: "ImmiTrump uses automatic solution to guide you through your visa application profile. We then fill out file all the forms for you!"
    }]
  });
