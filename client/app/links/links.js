angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  // Your code here
  // $scope.data = Links.getAll();
  // {};
  // console.log('testing');

  $scope.data = {};
  Links.getAll().then(function(data){
      $scope.data.links = data;
    });
  
});
