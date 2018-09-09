'use strict';

// Register add-recipe to its own module
angular.
  module('addRecipe').
  component('addRecipe', {
    templateUrl: 'add-recipe/add-recipe.template.html',
    controller: function addRecipeController() {
        this.ingredients = [{}];
        this.addIngredient = function () {
          this.ingredients.push({"qty": "", "ingredientName": ""});
        }
    }
  });
