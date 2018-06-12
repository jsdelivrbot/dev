/* ==========================================================================
services
========================================================================== */
// When you’re using Service, it’s instantiated with the ‘new’ keyword. Because of that, 
// you’ll add properties to ‘this’ and the service will return ‘this’. When you pass the 
// service into your controller, those properties on ‘this’ will now be available on that 
// controller through your service.

app.controller('myServiceCtrl', function ($scope, myService) {
  $scope.artist = myService.getArtist();
});

app.service('myService', function () {
  var _artist = '';
  this.getArtist = function () {
    return _artist;
  }
});

//angular service:
app.service('mySvc', ['$http', function($http) {
  return {
    myKey: function() {
      //do comething
    }
  }
}]);

/* ==========================================================================
factories
========================================================================== */

// When you’re using a Factory you create an object, add properties to it, 
// then return that same object. When you pass this service into your controller, 
// those properties on the object will now be available in that controller through your factory.

app.controller('myFactoryCtrl', function ($scope, myFactory) {
  $scope.artist = myFactory.getArtist()
})

app.factory('myFactory', function () {
  var _artist = '';
  var service = {}

  service.getArtist = function () {
    return _artist
  }

  return service;
})

// App config
app.factory('myFact', [function() {
  //do something
  var service = {};
  return service;
}]);

/* ==========================================================================
providers
========================================================================== */

app.controller('myProviderCtrl', function ($scope, myProvider) {
  $scope.artist = myProvider.getArtist();
  $scope.data.thingFromConfig = myProvider.thingOnConfig;
});

app.provider('myProvider', function () {
  this._artist = '';
  this.thingFromConfig = '';

  //Only the properties on the object returned from $get are available in the controller.
  this.$get = function () {
    var that = this;
    return {
      getArtist: function () {
        return that._artist;
      },
      thingonConfig: that.thingFromConfig
    }
  }
});

app.config(function (myProviderProvider) {
  myProviderProvider.thingFromConfig = 'This was set in config()';
})