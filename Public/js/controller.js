var myApp = angular.module('myApp');

//parameter can be changed to anything
//very common pattern here
myApp.controller('MyController', ['$scope', function ($scope) {
  $scope.myFirstName = "Gail";
  $scope.myModel = "Ready Player One";
}]);
