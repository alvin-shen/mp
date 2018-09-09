'use strict';

// Register menu-bar to its own module
angular.
  module('menuBar').
  component('menuBar', {
    templateUrl: 'menu-bar/menu-bar.template.html',
    controller: ['$location', function menuBarController($location) {
      this.addRecipe = function () {
        $location.path('/addRecipe');
      }
    }]
  });
