var myApp = angular.module('myApp', ['pascalprecht.translate', 'ngRoute']);

myApp.controller('appController', function($scope, $translate) {
    $scope.changeLanguage = function (key) {
        $translate.use(key);
    };
});

myApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.
        when('/home', {
            templateUrl: 'app/home.html',
            controller: 'homeController'
        }).
        when('/contact', {
            templateUrl: 'app/contact.html',
            controller: 'contactController'
        }).
            otherwise({
            redirectTo: '/home'
        })
    }
]);
