'use strict';

// Register login to its own module
angular.
  module('login').
  component('login', {
    templateUrl: 'login/login.template.html',
    controller: ['$location', function loginController($location) {
        this.submit = function() {
          $location.path('/recipeList');
        }
    }
  ]});
