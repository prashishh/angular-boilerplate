'use strict';

var app = angular.module('testingApp', 
    [])
.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/view1', {templateUrl: 'partials/partial1.html', controller: 'page1Controller'});
    $routeProvider.when('/view2', {templateUrl: 'partials/partial2.html', controller: 'page2Controller'});
    $routeProvider.otherwise({redirectTo: '/view1'});
}]);
