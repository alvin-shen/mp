'use strict';

// Register view-recipe to its own module
angular.
  module('viewRecipe').
  component('viewRecipe', {
    templateUrl: 'view-recipe/view-recipe.template.html',
    controller: ['$http', '$location', 'applicationContext', function viewRecipeController($http, $location, applicationContext) {
      var self = this;

      console.log("applicationContext == " , applicationContext);
      // TODO: Display recipe data by ID passed via the URL
      
    }]
  });
