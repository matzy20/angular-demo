//you would put other dependencies you're dependent on in []
angular.module('myApp',[]);

var myApp = angular.module('myApp');

myApp
  .config(function () {
    //config
  })
  .run(function () {
    //initializing
    console.log("Start!");
  });


