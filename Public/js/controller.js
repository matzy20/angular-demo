var myApp = angular.module('myApp');

myApp.controller('MyController', [
  '$scope',
  'mainCharacter',
  'CharacterVersionFactory',
  //parameter can be changed to anything
  function ($scope, mainCharacter, CharacterVersionFactory) {
    $scope.myFirstName = "Gail";
    $scope.myModel = "Ready Player One";
    $scope.mainCharacter = mainCharacter;
    $scope.characterVersion = CharacterVersionFactory;
  }
]);
