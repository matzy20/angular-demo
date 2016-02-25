var myApp = angular.module('myApp');

//parameter can be changed to anything
myApp.controller('MyController', [
  '$scope',
  'mainCharacter',
  'CharacterVersionFactory',
  'BookService',
  function ($scope, mainCharacter, CharacterVersionFactory, BookService) {
    $scope.myFirstName = "Gail";
    $scope.myModel = "Ready Player One";
    $scope.mainCharacter = mainCharacter;
    $scope.characterVersion = CharacterVersionFactory;
    $scope.books = BookService.getBooks();
  }
]);
