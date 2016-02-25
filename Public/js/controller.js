var myApp = angular.module('myApp');

myApp.controller('MyController', [
  '$scope',
  'mainCharacter',
  //parameter can be changed to anything
  function ($scope, mainCharacter) {
    $scope.myFirstName = "Gail";
    $scope.myModel = "Ready Player One";
    $scope.mainCharacter = mainCharacter;
  }
]);
