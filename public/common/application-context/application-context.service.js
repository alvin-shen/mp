'use strict';

// Register applicationContext to its own module
angular.
  module('applicationContext').
  service('applicationContext', function () {
    var applicationContext = {};
    return applicationContext;
  });
