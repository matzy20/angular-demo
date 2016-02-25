//you would put other dependencies you're dependent on in []
angular.module('myApp',[]);

var myApp = angular.module('myApp');

myApp
  .config(function () {
    //config
  })
  .run([
    '$rootScope',
    'APP_VERSION',
    function ($rootScope, APP_VERSION) {
      //initializing
      console.log("Start!");
      $rootScope.version = APP_VERSION;
    }
  ]);


