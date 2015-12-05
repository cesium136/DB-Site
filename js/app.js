//Define an angular module for our app
var sampleApp = angular.module('sampleApp', []);
//Define Routing for the application
sampleApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/Home', {
                templateUrl: '/partials/Home.html'
            }).
            when('/list', {
                templateUrl: '/partials/list.html'
            }).
			when('/login', {
                templateUrl: '/partials/login.html'
            }).
            otherwise({
                redirectTo: '/Home'
            });
}]);