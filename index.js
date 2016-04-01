var app = angular.module('bootular', ['ngRoute']);

app.config(function ($routeProvider) {
  $routeProvider.when('/home', {
    templateUrl: 'views/home.html',
    controller: 'homeCtrl'
  });
  $routeProvider.when('/data', {
    templateUrl: 'views/data.html',
    controller: 'dataCtrl'
  });
  $routeProvider.when('/graphs', {
    templateUrl: 'views/graphs.html',
    controller: 'graphsCtrl'
  });
  $routeProvider.when('/administration', {
    templateUrl: 'views/administration.html',
    controller: 'administrationCtrl'
  });
});

app.controller('homeCtrl', function ($scope) {

});

app.controller('dataCtrl', function ($scope) {

});

app.controller('graphsCtrl', function ($scope) {

});

app.controller('administrationCtrl', function ($scope) {

});

app.controller('HeaderController', function ($scope, $location) {
  $scope.isActive = function (viewLocation) { 
      return viewLocation === $location.path();
  };
});
