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
            template : '<h1>Hello blog {{ blogId }}</h1>',
            controller : 'BlogController'
        })
        .when('/error/:errorNum', {
            template: '<h1>{{ errorNum }}</h1>',
            controller : 'ErrorController'
        })
        .otherwise({
            redirectTo: '/error/404'
        });
}])

.controller('AppController', ['$scope', function ($scope){
    'use strict';
}])

.controller('BlogController', ['$scope', '$routeParams', function ($scope, $route){
    'use strict';

    $scope.blogId = $routeParmas.blogId || 0;
}])

.controller('ErrorController', ['$scope', '$routeParmas', function ($scope, $routeParmas){
    'use strict';

    $scope.errorNum = $routeParmas.errorNum || 404;

}]);