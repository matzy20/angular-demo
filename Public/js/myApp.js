//you would put other dependencies you're dependent on in []
angular.module('myApp',['ngRoute', 'ngAnimate']);

var myApp = angular.module('myApp');

myApp
  .config(function ($routeProvider, MoviesProvider) {
    //config
    MoviesProvider.setEndpoint('/api');

    //Routes
    $routeProvider
      .when('/', {
        templateUrl: '/templates/intro.html',
        controller: 'MyController'
      })
      .when('/books', {
        templateUrl: '/templates/books.html',
        controller: 'MyController'
      })
      .when('/movies', {
        templateUrl: '/templates/movies.html',
        controller: 'MyController'
      })
      .when('/404', {
        templateUrl: '/templates/404.html',
        controller: 'MyController'
      })
      .otherwise('/404');
  })
  .run([
    '$rootScope',
    'APP_VERSION',
    function ($rootScope, APP_VERSION) {
      //initializings
      console.log("Start!");
      $rootScope.version = APP_VERSION;
    }
  ]);


