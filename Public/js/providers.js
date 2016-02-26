var myApp = angular.module('myApp');

myApp.provider('Movies',
  function () {
    var _endpoint = null;
    this.setEndpoint = function (endpoint){
      //taking this new endpoint and assigning to Private endpoint
      _endpoint = endpoint;
    };
    //.$get is unique to provider
    this.$get = function ($http) {
    //TODO: fix $http later
      return {
      //creating our own Module pattern
        get: function () {
        //returning a 'promise', an object
        return $http({method: 'GET', url: _endpoint});
        }
      };
    };
  }
);