angular.module('app', [
    'ngRoute'
])

.config(['$routeProvider', '$httpProvider', '$locationProvider', function ($routeProvider, $httpProvider, $locationProvider) {
    'use strict';

    $locationProvider.html5Mode(true);

    $httpProvider.defaults.headers.common['Accept'] = 'application/json';
    $httpProvider.defaults.headers.common['Content-Type'] = 'application/json';
    $routeProvider
        .when('/', {
            redirectTo: '/blog'
        })
        .when('/about', {
            template : '<h1>About Me</h1>',
            controller : 'AboutController'
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

.controller('AboutController', ['$scope', function ($scope){
    'use strict';
}])

.controller('BlogController', ['$scope', '$routeParams', function ($scope, $routeParams){
    'use strict';

    $scope.blogId = $routeParams.blogId || 0;
}])

.controller('ErrorController', ['$scope', '$routeParams', function ($scope, $routeParams){
    'use strict';

    $scope.errorNum = $routeParams.errorNum || 404;
}]);