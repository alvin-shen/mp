'use strict';

// Register recipe-list to its own module
angular.
  module('recipeList').
  component('recipeList', {
    templateUrl: 'recipe-list/recipe-list.template.html',
    controller: function recipeListController() {
        this.data = "Hello World!";
    }
  });
