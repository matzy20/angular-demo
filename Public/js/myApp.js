//you would put other dependencies you're dependent on in []
angular.module('myApp',['ngRoute']);

var myApp = angular.module('myApp');

myApp
  .config(function ($routeProvider, MoviesProvider) {
    //config
    MoviesProvider.setEndpoint('/api');

    //Routes
    $routeProvider
      .when('/404', {
        templateUrl: '/templates/404.html'
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


