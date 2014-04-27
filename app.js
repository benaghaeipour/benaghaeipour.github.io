angular.module('app', [
    'ngRoute'
])

.config(['$routeProvider', '$httpProvider', '$locationProvider', function ($routeProvider, $httpProvider, $locationProvider) {
    'use strict';

    $locationProvider.hashPrefix('!');
    $locationProvider.html5Mode(true);

    $httpProvider.defaults.headers.common['Accept'] = 'application/json';
    $httpProvider.defaults.headers.common['Content-Type'] = 'application/json';
    $routeProvider
        .when('/', {
            template : '<h1>Hello World</h1>',
            controller : 'AppController'
        })
        .when('/blog', {
            template : '<h1>Hello blog</h1>',
            controller : 'AppController'
        })
        .when('/blog/:blogId', {
            template : '<h1>Hello blog</h1>',
            controller : 'AppController'
        })
        .otherwise({
            template: '<h1>404</h1>'
        });
}])

.controller('AppController', ['$scope', '$route', function ($scope, $route){
    'use strict';

    var x = $route;
    debugger;

}]);