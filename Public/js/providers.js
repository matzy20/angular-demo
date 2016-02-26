var myApp = angular.module('myApp');

myApp.provider('Movies',
  function () {
    this.endpoint = null;
    this.setEndpoint = function (endpoint){
      this.endpoint = endpoint;
    };
    //.$get is unique to provider
    this.$get = function () {
    //TODO: fix $http later
    //   return $http({
    //   method: 'GET',
    //   url: this.endpoint,
    // })
    //   .then(function (response){
    //     console.log(response);
    //     return response.data;
    //   });
    return [
      {title:'Ready Player One', author: 'Some Body'},
    {title:'LuckyEveryday', author: 'Some Body'},
    {title:'Harry Potter', author: 'Some Body'},
    {title:'Last Lecture', author: 'Some Body'},
    ];
    };
  }
);