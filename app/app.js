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
    $routeProvider.when('/', {
        templateUrl: 'home/home.html',
        controller: 'homeController'
    });
    $routeProvider.when('/products', {
        templateUrl: 'products/products.html',
        controller: 'productsController'
    });
    $routeProvider.when('/demo', {
        templateUrl: 'demo/demo.html',
        controller: 'demoController'
    });
    $routeProvider.when('/buy', {
        templateUrl: 'buy/buy.html',
        controller: 'buyController'
    });
    $routeProvider.when('/about', {
        templateUrl: 'about/about.html',
        controller: 'aboutController'
    });
    $routeProvider.when('/contact', {
        templateUrl: 'contact/contact.html',
        controller: 'contactController'
    });
    $routeProvider.when('/faq', {
        templateUrl: 'faq/faq.html',
        controller: 'faqController'
    });
    $routeProvider.when('/news', {
        templateUrl: 'news/news.html',
        controller: 'newsController'
    });
    $routeProvider.when('/pricing', {
        templateUrl: 'pricing/pricing.html',
        controller: 'pricingController'
    });
    $routeProvider.when('/privacy', {
        templateUrl: 'privacy/privacy.html',
        controller: 'privacyController'
    });
    $routeProvider.when('/http404', {
        templateUrl: 'http404/http404.html',
        controller: 'http404Controller'
    });
    $routeProvider.otherwise({redirectTo: '/http404'});
}]);

/*
 * The show-tabs directive corrects click handling for nav-tabs.
 * Without this, the Bootstrap click event propagates and results
 * in a 404 error.
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