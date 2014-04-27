angular.module('app', [
    'ngRoute'
])

.config(['$routeProvider', '$httpProvider', function ($routeProvider, $httpProvider) {
    'use strict';

    $httpProvider.defaults.headers.common['Accept'] = 'application/json';
    $httpProvider.defaults.headers.common['Content-Type'] = 'application/json';
    $routeProvider
        .when('/', {
            template : '<h1>Hello World</h1>',
            controller : 'AppController'
        })
        .when('/blog', {
            template : '<h1>Hello blog</h1>',
            controller : 'BlogController'
        })
        .when('/blog/:blogId', {
            template : '<h1>Hello blog</h1>',
            controller : 'BlogController'
        })
        .otherwise({
            template: '<h1>404</h1>'
        });
}])

.controller('AppController', ['$scope', function ($scope){
    'use strict';

    debugger;

}])
.controller('BlogController', ['$scope', '$route', function ($scope, $route){
    'use strict';

    debugger;

}]);