'use strict';

// Register component-one to its own module
angular.
  module('componentOne').
  component('componentOne', {
    templateUrl: 'component-one/component-one.template.html',
    controller: function ComponentOneController() {
        this.data = "Hello World!";
    }
  });
