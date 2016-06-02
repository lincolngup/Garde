/*
 * Root module for the Garde Systems web site
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
    $routeProvider.when('/products', {
        templateUrl: 'products/products.html',
        controller: 'productsController'
    });
    $routeProvider.when('/order', {
        templateUrl: 'buy/buy.html',
        controller: 'orderController'
    });
    $routeProvider.when('/about', {
        templateUrl: 'about/about.html',
        controller: 'aboutController'
    });
    $routeProvider.when('/contact', {
        templateUrl: 'contact/contact.html',
        controller: 'contactController'
    });
    $routeProvider.when('/news', {
        templateUrl: 'news/news.html',
        controller: 'newsController'
    });
    $routeProvider.when('/privacy', {
        templateUrl: 'privacy/privacy.html',
        controller: 'privacyController'
    });
    $routeProvider.otherwise({redirectTo: '/home'});
}]);

/*
 * The show-tabs directive corrects click handling for nav-tabs.
 */
app.directive("showTabs", function() {
    return {
        link: function (scope, element, attrs) {
            element.click(function(event) {
                event.preventDefault();
                $(element).tab("show");
            });
        }
    };
});