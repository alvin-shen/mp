'use strict';

// Register recipe-list to its own module
angular.
  module('recipeList').
  component('recipeList', {
    templateUrl: 'recipe-list/recipe-list.template.html',
    controller: ['$http', '$location', 'applicationContext', function recipeListController($http, $location, applicationContext) {
      var self = this;
      
      loadRecipeList();

      function loadRecipeList() {
        // TODO: Externalize to configuration
        var url = "/service/recipes";

        $http({
          'method': 'GET',
          'url': url
        }).then(function successCallback(response) {
          console.log(response.data);
          applicationContext.recipes = response.data;
          self.recipes = response.data;
        }, function errorCallback(response) {
          // Handle error response
        });
      }

      this.viewRecipeDetail = function(recipeId) {
        $location.path('/recipe/' + recipeId);
      };
    }]
  });
