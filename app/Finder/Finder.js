'use strict';

MyApp.controller('Finder', ['$scope', 'Topics', 'Resources', function($scope, Topics, Resources) {

  $scope.topics = [],
  $scope.resources = Resources.resources;

  Topics.get().then(function(data){

    $scope.topics = data;

  });

}]);