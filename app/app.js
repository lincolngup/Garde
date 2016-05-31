/*
 * Root module for the Garde web site
 */
"use strict";

// declare app-level module which depends on views and components
var app = angular.module('app', [
    'ngRoute'               // route provider
]);

// set up routing
app.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/home', {
        templateUrl: 'home/home.html',
        controller: 'homeController'
    });
    $routeProvider.when('/about', {
        templateUrl: 'about/about.html',
        controller: 'aboutController'
    });
    $routeProvider.when('/contact', {
        templateUrl: 'contact/contact.html',
        controller: 'contactController'
    });
    $routeProvider.when('/privacy', {
        templateUrl: 'privacy/privacy.html',
        controller: 'privacyController'
    });
    $routeProvider.otherwise({redirectTo: '/home'});
}]);