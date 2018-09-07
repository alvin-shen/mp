'use strict';

// Register login to its own module
angular.
  module('login').
  component('login', {
    templateUrl: 'login/login.template.html',
    controller: function loginController() {
        this.data = "Login";
    }
  });
