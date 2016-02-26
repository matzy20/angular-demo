var myApp = angular.module('myApp');

//parameter can be changed to anything
myApp.controller('MyController', [
  '$scope',
  'mainCharacter',
  'CharacterVersionFactory',
  'BookService',
  'Movies',
  function ($scope, mainCharacter, CharacterVersionFactory, BookService, Movies) {
    $scope.myFirstName = "Gail";
    $scope.myModel = "Ready Player One";
    $scope.mainCharacter = mainCharacter;
    $scope.characterVersion = CharacterVersionFactory;
    $scope.books = BookService.getBooks();
    //binding to scope, anything exposed here just making Public
    $scope.BookService = BookService;
    //empty array due to ajax request, assuming movies is an []
    $scope.movies = [];
    //promise needs a then
    Movies.get().then(function (response){
      $scope.movies = response.data;
    });
  }
]);
