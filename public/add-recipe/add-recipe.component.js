'use strict';

// Register add-recipe to its own module
angular.
  module('addRecipe').
  component('addRecipe', {
    templateUrl: 'add-recipe/add-recipe.template.html',
    controller: ['$http', '$location', function addRecipeController($http, $location) {
      this.recipe = {};
      this.ingredients = [{}];

      this.addIngredient = function () {
        this.ingredients.push({ "qty": "", "ingredientName": "" });
      };

      this.addRecipe = function () {
        console.log("recipe: " , this.recipe);

        // TODO: Externalize to configuration
        var url = '/service/recipe';

        $http({
          'method': 'POST',
          'url': url,
          'data': this.recipe
        }).then(function successCallback(response) {
          // Handle success response
          console.log("Success: ", response);
          $location.path('/recipeList');
        }, function errorCallback(response) {
          // Handle error response
        });
      };
    }]
  });
