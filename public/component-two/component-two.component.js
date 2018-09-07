'use strict';

// Register `componentTwo` component, along with its associated controller and template
angular.
  module('componentTwo').
  component('componentTwo', {
    templateUrl: 'component-two/component-two.template.html',
    controller: ['$routeParams', '$http',
      function componentTwoController($routeParams, $http) {
        var self = this;

        // Get the url parameter
        var urlParam1 = $routeParams.urlParam1;

        // Create the endpoint url to make ajax call to. In this case, the example is to include urlParam1 as a parameter in the url.
        var url = '/service/' + urlParam1;

        /***** Example of GET request *****/
        $http({
          'method': 'GET',
          'url': url
        }).then(function successCallback(response) {
          self.getResponse = response.data;
        }, function errorCallback(response) {
          // Handle error response
        });
        /**********************************/

        /***** Example of POST request *****/
        var data = {
          'field': "value"
        };
        $http({
          'method': 'POST',
          'url': url,
          'data': data
        }).then(function successCallback(response) {
          // Handle success response
          self.postResponse = response.data;
        }, function errorCallback(response) {
          // Handle error response
        });
        /**********************************/
      }
    ]
  });
